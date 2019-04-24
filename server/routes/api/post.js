// Set requires
const express   = require("express");
const router    = express.Router();

// Call post and blog model
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
        .catch(err => console.log(err));

});

module.exports = router;