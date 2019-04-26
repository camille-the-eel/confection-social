// Set requires
const router   = require("express").Router();
const Page = require("../../database/models/page");
const Post = require("../../database/models/post");

// Get route for retreiving a single post and pushing all of their posts to the client
router.get("/:id", (req, res) => {

    // Search database for page based off page_title from the url 
    Page.findOne({
        page_title: req.params.id
    })
    .then(async pageData => {

        // Return an error of we return a blank page
        if (!pageData) {
            return res.status(404).json({ emptypage: "Page not found" });
        }

        // Set current page id to id received from data returned from database
        let pageId = pageData._id

        // Set up empty array to be filled by Post database call
        let posts = [];

        // Find all posts where source = the pageId (post creator)
        await Post.find({
            source: pageId
        })
        .then(post => {
            
            // Return an error of we return an empty post array
            if (!post) {
                return res.status(404).json({ emptyposts: "Page has not made any posts" });
            }

            // Return a filled in posts array
            posts = post.map(post => post);
            return posts;
        })
        .catch(err => console.log(err));

        // Create page content object to carry page info and all created posts
        let pageContent = {
            pageInfo: pageData,
            posts: posts
        }

        res.json(pageContent);
    })
    .catch(err => res.status(422).json(err));
    }
);

module.exports = router;