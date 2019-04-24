// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Blog Schema
var BlogSchema = new Schema({
    // Blog Title
    blog_title: {
        type: String,
        unique: true,
        required: true
    },

    // Avatar image to be shown in association with the blog
    avatar: {
        type: String,
        default: "https://via.placeholder.com/150"
    },

    // Is primary blog associated to a user (typically first blog created)
    isPrimary: {
        type: Boolean,
        default: false
    },

    // Date created
    dateCreate: {
        type: Date,
        default: Date.now
    },

    // Associated user
    userID: {
        type: String,
        required: true
    },

    // Blogs associated with this blog
    associated_blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "blogs"
        }
    ],

    // Blogs followed by this blog
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: "blogs"
        }
    ],

    // Posts by this blog
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "posts"
        }
    ],

    // Notifications for this blog
    notifications: [
        {
            type: Schema.Types.ObjectId,
            ref: "notifications"
        }
    ],

    // Messages for this blog
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: "messages"
        }
    ],

    // Likes for this blog
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "blog_likes"
        }
    ]
});

module.exports = Blog = mongoose.model("blogs", BlogSchema);

