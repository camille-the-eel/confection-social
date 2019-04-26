// Set requires
const express   =   require("express");
const router    =   express.Router();
const bcrypt    =   require("bcryptjs");
const jwt       =   require("jsonwebtoken");

// Load input validation
const validateRegisterInput =   require("../../validation/register");
const validateLoginInput    =   require("../../validation/login");

// Load User and page model
const User  =   require("../../database/models/user");
const Page  =   require("../../database/models/page");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    
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
                    password:       req.body.password
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
                                    userID: user._id
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

        let userID = user.id;
        let pageID = "";

        // Use user id to search for the primary page associated with that id
        await Page.find({ 
            userID: userID,
            isPrimary: true
        }).then(page => {
            pageID = page[0]._id
            return pageID;
        });

            // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User match
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    pageID: pageID,
                    email: user.email
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