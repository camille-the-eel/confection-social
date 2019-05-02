// Set requires
const router   = require("express").Router();

const Page = require("../../database/models/page");
const Post = require("../../database/models/post");


// @route GET api/pages/:id
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
                        $and: [
                            {
                                source: pageId
                            },
                            {
                                isRepaged: false
                            }
                        ]
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

// @ GET api/pages/basic/:id
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

// @ POST api/pages/addpage

router.post("/addpage", (req, res) => {
    
    // Set data for new page
    const newPage = new Page({
        page_title: req.body.page_title,
        userID: req.body.userID,
        following: [
            req.body.page_title
        ]
    });

    newPage 
        .save()
        .then(page => res.json(page))
        .catch(err => res.status(422).json(err));
    
});

// @ GET api/pages/updatepages/:id
// Gets all pages for a given user
router.get("/updatepages/:id", (req, res) => {

    Page.find({
        userID: req.params.id
    })
    .then(pages => {
        res.send(pages)
    })
    .catch(err => res.status(422).json(err));
})

// @ UPDATE api/pages/changeprimary
// Query pages by user id and change the page with isPrimary as true to false and change the clicked page to isPrimary is true
router.put("/updateactive", (req, res) => {

    Page
        .updateOne(
            // Query for primary page for current user
            {
                $and: [
                    {
                        userID: req.body.userID
                    },
                    {
                        isPrimary: true
                    }
                ]
            },
            // Change isPrimary to false
            {
                $set: {
                    isPrimary: false
                }
            }
        )
        .then (
            // After changing previous primary blog to false, query for current page that we clicked and change the isPrimary key to true
            Page.updateOne(

                // Query for current page
                {
                    _id: req.body.currentPage
                },
                // Change isPrimary to true
                {
                    $set: {
                        isPrimary: true
                    }
                }
            )
            .then(pages => res.send(pages))
            .catch(err => res.status(422).json(err))
        )
        .catch(err => res.status(422).json(err));
})


module.exports = router;