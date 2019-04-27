// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Comments Schema
var PostCommentSchema = new Schema({
    comment_text: {
        type: String,
        required: true   
    },

    // Page that has sent this message
    commenter_info: {
        commenterId: {
            type: String
        },
        commenter_page: {
            type: String,
        },
        commenter_avatar: {
            
        }
    },

    // Related Post info
    post_info: {
        postId: {
            type: String
        },
        source: {
            type: String
        }
    },

    // Date comment created
    dateCreate: {
        type: Date,
        default: Date.now
    }
});

var Post_comment = mongoose.model("post_comments", PostCommentSchema);

module.exports = Post_comment;

