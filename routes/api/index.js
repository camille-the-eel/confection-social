// Requiring router
const router = require("express").Router();

// Pulling in all local API routes to be exported as combined router
const userRoutes = require("./users");
const blogRoutes = require("./blogs");
const messageRoutes = require("./messages");
const notificationRoutes = require("./notifications");
const postRoutes = require("./posts");
const post_comments = require("./post_comments");
const post_likes = require("./post_likes");
const post_reblogs = require("./post_reblogs");
const post_tags = require("./post_tags");
const tags = require("./tags");

// Setting all routes
router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/messages", messageRoutes);
router.use("/notifications", notificationRoutes);
router.use("/posts", postRoutes);
router.use("/post_comments", post_comments);
router.use("/post_likes", post_likes);
router.use("/post_reblogs", post_reblog);
router.use("/post_tags", post_tags);
router.use("/tags", tags);

module.exports = router;
