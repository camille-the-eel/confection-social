// Set requires for router
const express   = require("express");
const router    = express.Router();

// Call page model
const Post_repage      = require("../../database/models/post_repage");

// @ POST api/post_repages/:id
// Takes a post and repages it into the current user's active page. Passes current user in as repaged by
router.post("/create", (req, res) => {
    
    // Create rePage object from supplied data
    const newRepage = new Post_repage({
        image_url:      req.body.sourcePost.photo,
        credit:         req.body.sourcePost.credit,
        caption:        req.body.sourcePost.caption,
        post_tags:      req.body.sourcePost.tags,
        post_comments:  req.body.sourcePost.post_comments,
        source:         req.body.sourcePost.source,
        repaged_by:     req.body.rePagedBy
    });

    // Insert new repage into the database
    newRepage
        .save()
        .then(repage => res.json(repage))
        .catch(err => res.status(422).json(err));
});

module.exports = router;