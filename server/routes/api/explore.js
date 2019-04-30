// Set requires
const express   = require("express");
const router    = express.Router();

// Call post model
const Post      = require("../../database/models/post");

// @ POST api/posts/home
// Currently pulls all posts created. Will eventually pull all posts by current users followed blogs
router.get("/explore", (req, res) => {
    Post.find()
        .then(posts => {
            console.log(posts)
            res.json(posts)
        })
        .catch(err => res.status(422).json(err));
});

module.exports = router;