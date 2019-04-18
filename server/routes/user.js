const express = require("express");
const router = express.Router();
const User = require("../database/models/user");
const passport = require("../passport");

router.post("/", (req, res) => {
    console.log("user signup");

    const { email, password, primaryBlog } = req.body
    // console.log(req.body);
    
    // Add Validation
    User.findOne({ email: email }, (err, user) => {
        // Console.logs to make sure data is being passed through
        console.log(email);
        console.log(password);
        console.log(primaryBlog);

        if (err) {
            console.log("User.js post error: ", err)
        } else if (user) {
            res.json({
                error: `Sorry, there is already an account associated with the email: ${email}`
            })
        } else {
            const newUser = new User({
                email: email,
                password: password,
                primaryBlog: primaryBlog
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    "/login", 
    function (req, res, next) {
        console.log("routes/user.js, login, req.body: ");
        console.log(req.body);
        next()
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("logged in", req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
)

router.get("/", (req, res, next) => {
    console.log("===== user!! =====");
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post("/logout", (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: "logging out" })
    } else {
        res.send({ msg: "no user to log out" })
    }
})

module.exports = router