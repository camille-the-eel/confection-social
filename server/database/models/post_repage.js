// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Schema
var Post_repageSchema = new Schema({

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

    repaged_by: {
        type: String
    },

    dateCreate: {
        type: Date,
        default: Date.now
    },

    // Comments made for this post
    post_comments: [
        {
            comment_text: {
                type: String
            },
            comment_author: {
                type: String
            },
            cAuthor_id: {
                type: String
            },
            cAuthor_avatar: {
                type: String
            },
            cDateCreate: {
                type: Date,
                default: Date.now
            }
        }
    ],

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
    post_repages: [
        {
            type: Schema.Types.ObjectId,
            ref: "post_repages"
        }
    ]
});

var Post_repage = mongoose.model("post_repages", Post_repageSchema);

module.exports = Post_repage;

