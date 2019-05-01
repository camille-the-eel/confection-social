// Set requires
const express   =   require("express");
const router    =   express.Router();
const bcrypt    =   require("bcryptjs");
const jwt       =   require("jsonwebtoken");
const multer    =   require('multer');
const { mongo } = require('mongoose');
const GridFsStorage = require('multer-gridfs-storage') ;
const Grid = require('gridfs-stream');
Grid.mongo = mongo;
// const dbConfig  =   require("../../../dbconfig");
// var gfs = new Grid(dbConfig.db);

// Load input validation
const validateRegisterInput =   require("../../validation/register");
const validateLoginInput    =   require("../../validation/login");

// Load User and page model
const User  =   require("../../database/models/user");
const Page  =   require("../../database/models/page");

//set up connection to db for file storage
const storage = new GridFsStorage({
    url: `mongodb+srv://${process.env.MONGO_UN}:${process.env.MONGO_PW}@confection-db-npp3q.mongodb.net/test?retryWrites=true/users`
    // file: (req) => {    
    //     return {      
    //          bucketName: 'avatar',       
    //          //Setting collection name, default name is fs
    //   }  
// }
});

//Set multer storage engine to storage object ^ and file input to single file
const singleUpload = multer({ storage: storage }).single("file");


router.post('/avatars', singleUpload, (req, res) => {

    console.log("REQ", req.payload);
    console.log("BODY", req.body);
    console.log("FILE", req.file);

    if (req.file) {
       return res.json({
          success: true,
          file: req.file
       });
    }
    res.send({ success: false });
 });

// @route POST api/users/register
// @desc Register userx
// @access Public
router.post("/register", (req, res) => {

    console.log("BODY", req.body);
    console.log("FILE", req.file);
    
    // Form Validation
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Check to see if the submitted email is already in the database
    User
        .findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: "Email already in use" });
            } else {

                const newUser = new User({
                    email:          req.body.email,
                    primaryPage:    req.body.primaryPage,
                    password:       req.body.password,
                });

                // Hash password before saving to database
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                res.json(user);
                                const newPage = new Page({
                                    page_title: user.primaryPage,
                                    isPrimary: true,
                                    userID: user._id,
                                    following:[
                                        user.primaryPage
                                    ]
                                });

                                newPage
                                    .save()
                                    .catch(err => console.log(err));

                            })
                            .catch(err => console.log(err));
                    });

                });

                return res.status(200)

                
            }
        });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {

    // Form Validation
    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email     =   req.body.email;
    const password  =   req.body.password;

    User.findOne({ email }).then(async user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found"});
        }

        // Set user id to id received from database and         
        let userID = user.id;

        // Set up an empty pages array to be filled within page call
        let pages = [];

        // Use user id to search for all pages created by that user id
        await Page.find({ 
            userID: userID
        }).then(page => {
            pages = page.map(page => page)
            return pages;
        })
        .catch(err => console.log(err));

            // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User match
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    pages: pages
                };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: 31556926
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer" + token
                        });
                    }
                )
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
});

module.exports = router;