// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Page Schema
var PageSchema = new Schema({
    // Page Title
    page_title: {
        type: String,
        unique: true,
        required: true
    },

    // Avatar image to be shown in association with the page
    avatar: {
        type: String,
        default: "https://via.placeholder.com/150"
    },

    page_description: {
        type: String,
        default: "This is the test default description"
    },

    // Is primary page associated to a user (typically first page created)
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

    // Pages associated with this page
    associated_pages: [
        {
            type: Schema.Types.ObjectId,
            ref: "pages"
        }
    ],

    // Pages followed by this page
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: "pages"
        }
    ],

    // Posts by this page
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "posts"
        }
    ],

    // Notifications for this page
    notifications: [
        {
            type: Schema.Types.ObjectId,
            ref: "notifications"
        }
    ],

    // Messages for this page
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: "messages"
        }
    ],

    // Likes for this page
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "page_likes"
        }
    ]
});

module.exports = Page = mongoose.model("pages", PageSchema);

