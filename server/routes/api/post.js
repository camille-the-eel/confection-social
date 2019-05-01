// Set requires
const express   = require("express");
const router    = express.Router();

// Call post model
const Post      = require("../../database/models/post");
const Page      = require("../../database/models/page");

// @ POST api/posts/create
router.post("/create", (req, res) => {

    console.log("REQ", req.body);

    let image_url = req.body.photo || req.body.url;

    // Create new post object
    const newPost = new Post({
        image_url:  image_url,
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

// @GET api/posts/comments/:id
// Get all comments for the selected post (by id)
router.get("/comments/:id", (req, res) => {
    
    Post.findOne({
        _id: req.params.id
    })
    .then(postData => res.json(postData))
    .catch(err => res.status(422).json(err));
})

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

// @ POST api/posts/home
// Currently pulls all posts created. Will eventually pull all posts by current users followed blogs
router.post("/home", (req, res) => {


    // Find pages created by current user id and pull back all associated pages
    Page.findOne({
        userID: req.body._id
    })
    .then(async pages => {

        // Setting variables to be used in datacalls
        let followedPages   = pages.following;
        let postSource      = [];
        let postsForHome    = [];
           
        // Search for page id's that match page title from following list
        // Page id's will be push into the postSource array to be used to search for posts by source
        await Page
            .find({
                page_title: {
                    $in: followedPages
                }
            })
            .then(pages => {
                for (page in pages) {
                    postSource.push(pages[page]._id)
                }
                return
            })
            .catch(err => res.status(422).json(err));

        // // Pulling all posts by any followed page (queryed by id from postSource array)
        // await Post
        //     .find({
        //         source: {
        //             $in: postSource
        //         }
        //     })
        //     .then(posts => {
        //         for (post in posts) {
        //             postsForHome.unshift(posts[post])
        //         }
        //         return
        //     })
        //     .catch(err => res.status(422).json(err));
            

        // await Post
        //     .find({
        //         isRepaged: true,
        //         repaged_by: {
        //             $in: followedPages
        //         }
        //     })
        //     .then(posts => {
        //         for (post in posts) {
        //             postsForHome.unshift(posts[post])
        //         }
        //         return
        //     })
        //     .catch(err => res.status(422).json(err));

        await Post.find({
            $or: [
                {
                    source: {
                        $in: postSource
                    }
                },
                {
                    $and: [
                        {
                            isRepaged: true
                        },
                        {
                            repaged_by: {
                                $in: followedPages
                            }
                        }
                    ]
                }
            ]
        })
        .then(posts => {
            for (post in posts) {
                postsForHome.unshift(posts[post])
            }
            return
        })
        .catch(err => res.status(422).json(err));

        res.json(postsForHome)
    })
    .catch(err => res.status(422).json(err))

});

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