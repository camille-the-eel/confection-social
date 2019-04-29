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
        { _id: req.body.post_id },
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

// @ POST api/posts/repage
// Repaging an existing post onto the user's currently active page
router.post("/repage", (req, res) => {

    // Create new post with repaged set to true and a repaged by field filled in
    const newPost = new Post({
        image_url:      req.body.sourcePost.image_url,
        credit:         req.body.sourcePost.credit,
        caption:        req.body.sourcePost.caption,
        post_tags:      req.body.sourcePost.tags,
        post_comments:  req.body.sourcePost.post_comments,
        source:         req.body.sourcePost.source,
        repaged_by:     req.body.rePagedBy,
        isRepaged:      true
    });

    newPost
        .save()
        .then(repage => res.json(repage))
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