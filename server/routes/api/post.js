// Set requires
const express   = require("express");
const router    = express.Router();

// Call post model
const Post      = require("../../database/models/post");

// @ POST api/posts/create
router.post("/create", (req, res) => {

    // Create new post object
    const newPost = new Post({
        image_url:  req.body.photo,
        credit:     req.body.credit,
        caption:    req.body.caption,
        post_tags:  req.body.tags,
        source:     req.body.source
    });

    // Insert a new post into the database
    newPost
        .save()
        .then(post => res.json(post))
        .catch(err => res.status(422).json(err));

});

// @ GET api/posts/home
// Currently pulls all posts created. Will eventually pull all posts by current users followed blogs
router.get("/home", (req, res) => {
    Post
        .find()
        .then(posts => {
            res.json(posts)
        })
        .catch(err => res.status(422).json(err))
})

module.exports = router;