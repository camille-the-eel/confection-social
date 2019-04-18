// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Schema
var PostsSchema = new Schema({
    post_title: {
        type: String,
        required: true
    },

    text_body: {
        type: String,
    },

    image_url: {
        type: String,
    },

    credit: {
        type: String,
    },

    caption: {
        type: String,
    },

    post_type: {
        type: String,
    },
    
    video_embed_code: {
        type: String,
    },

    // Post Tags associated with this post
    post_tags: [
        {
            type: Schema.Types.ObjectId,
            ref: "post_tags"
        }
    ],

    // Likes for this post
    post_likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "post_likes"
        }
    ],    
    
    // Likes for this post
    post_reblogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "post_reblogs"
        }
    ]
});

var posts = mongoose.model("posts", PostsSchema);

module.exports = posts;

