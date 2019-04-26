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
    sender_ID: [
        {
            type: Schema.Types.ObjectId,
            ref: "pages"
        }
    ]
});

var Post_comment = mongoose.model("post_comments", PostCommentSchema);

module.exports = Post_comment;

