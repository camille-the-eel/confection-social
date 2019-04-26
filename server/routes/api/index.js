const router        = require("express").Router();
const userRoutes    = require("./user");
const postRoutes    = require("./post");
const pageRoutes    = require("./page");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/pages", pageRoutes);

module.exports = router;