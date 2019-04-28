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

// @ POST api/posts/addcomment
// Adding a comment to a post

router.post("/addcomment", (req, res) => {

    // Update Post where _id = the post id that we are adding to
    // Using update $push operator to push the new comment into the comments array
    Post.updateOne(
        { _id: req.body.post_id},
        { $push: 
            { post_comments: 
                {
                    comment_text: req.body.comment_text,
                    comment_author: req.body.comment_author,
                    cAuthor_id: req.body.cAuthor_id,
                    cAuthor_avatar: req.body.cAuthor_avatar
                }
            } 
        }
    )
    .then(comment => res.json(comment))
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
});

module.exports = router;