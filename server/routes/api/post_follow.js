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
        { _id: req.body.userPage_id },
        {
            $push: {
                following: req.body.pageToFollow
            }
        }
    )
    .then(follow => res.json(follow))
    .catch(err => res.status(422).json(err))
})

module.exports = router;