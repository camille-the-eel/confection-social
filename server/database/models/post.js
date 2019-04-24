// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Schema
var PostSchema = new Schema({

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

    source: {
        type: String
    },

    dateCreate: {
        type: Date,
        default: Date.now
    },

    // Post Tags associated with this post
    post_tags: {
        type: Array
    }, 

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

var Post = mongoose.model("posts", PostSchema);

module.exports = Post;

