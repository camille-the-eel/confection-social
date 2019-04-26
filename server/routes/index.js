// External Requires
const path = require("path");
const router = require("express").Router();

// Pulling in local API routes
const apiRoutes = require("./api");

// Calling local api routes
router.use("/api", apiRoutes);

// Send the react app if no API routes are hit
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;