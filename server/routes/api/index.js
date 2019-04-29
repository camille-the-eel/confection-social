const router            = require("express").Router();
const userRoutes        = require("./user");
const postRoutes        = require("./post");
const pageRoutes        = require("./page");
const postFollowRoutes  = require("./post_follow");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/pages", pageRoutes);
router.use("/post_follows", postFollowRoutes);

module.exports = router;