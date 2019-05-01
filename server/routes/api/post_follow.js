// Set requires for router
const express   = require("express");
const router    = express.Router();

// Call page model
const Page      = require("../../database/models/page");

// @ POST api/post_follows/follow
// Pushes a page id into the user's currently active page's follow array
router.post("/follow", (req, res) => {
    
    // Update one document where the _id = the user's currently active page id
    // Use $push operator to push page to follow into the array
    Page.updateOne(
        { page_title: req.body.userPage_title },
        {
            $push: {
                following: req.body.pageToFollow
            }
        }
    )
    .then(follow => res.json(follow))
    .catch(err => res.status(422).json(err));
});

// @ POST api/post_follows/unfollow
// Pushes a page id into the user's currently active page's follow array
router.post("/unfollow", (req, res) => {
    
    // Update one document where the _id = the user's currently active page id
    // Use $push operator to push page to follow into the array
    Page.updateOne(
        { page_title: req.body.userPage_title },
        {
            $pull: {
                following: req.body.pageToFollow
            }
        }
    )
    .then(follow => res.json(follow))
    .catch(err => res.status(422).json(err));
});

// @ GET api/post_follows/checkfollow
// Pulls following array for the user's currently active page
router.get("/checkfollow/:id", (req, res) => {

    // Pull Follow array using the active id as the search param
    Page.findOne({
        page_title: req.params.id
    })
    .then(pageData => {

        if(!pageData) {
            return res.status(404).json({ emptypage: "Page not found" });
        }

        res.json(pageData.following)
    })
    .catch(err => res.status(422).json(err));
})

module.exports = router;