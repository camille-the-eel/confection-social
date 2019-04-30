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
        let pageId      = pageData._id
        let page_title  = pageData.page_title;

        // Set up empty array to be filled by Post database call
        let postsToPage = [];

        // Find all posts where source = the pageId (post creator)
        await Post.find({
                $or: [
                    {
                        // $and: [
                        //     {
                                source: pageId
                        //     },
                        //     {
                        //         isRepaged: false
                        //     }
                        // ]
                    },
                    {
                        
                        repaged_by: page_title
                        
                    }
                ]
            })
            .then(posts => {
            
                // Return an error of we return an empty post array
                if (!posts) {
                    return res.status(404).json({ emptyposts: "Page has not made any posts" });
                }

                // Return a filled in posts array
                for (post in posts) {
                    postsToPage.unshift(posts[post])
                }
                return
            })
            .catch(err => console.log(err));

        // Create page content object to carry page info and all created posts
        let pageContent = {
            pageInfo: pageData,
            posts: postsToPage
        }

        res.json(pageContent);
    })
    .catch(err => res.status(422).json(err));
});

// Get route to pull page title and avatar by using page id
router.get("/basic/:id", (req, res) => {
    Page.findOne({
        _id: req.params.id
    })
    .then(pageData => {
        
        // Return an error of we return a blank page
        if (!pageData) {
            return res.status(404).json({ emptypage: "Page not found" });
        }

        let pageDataBasic = {
            page_title: pageData.page_title,
            avatar: pageData.avatar,
            _id: pageData._id
        }

        res.json(pageDataBasic);
    })
    .catch(err => res.status(422).json(err));
    }
)

module.exports = router;