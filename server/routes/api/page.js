// Set requires
const router   = require("express").Router();
const Page = require("../../database/models/page");

// Get route for retreiving a single post and pushing all of their posts to the client
router.get("/:id", (req, res) => {
        Page.findOne({
            page_title: req.params.id
        })
        .then(pageData => res.json(pageData))
        .catch(err => res.status(422).json(err));
        }
);

module.exports = router;