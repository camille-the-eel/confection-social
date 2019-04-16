// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Comments Schema
var PostCommentsSchema = new Schema({
    comment_text: {
        type: String,
        required: true   
    },

    // Blog that has sent this message
    sender_ID: [
        {
            type: Schema.Types.ObjectId,
            ref: "blogs"
        }
    ]
});

var post_comments = mongoose.model("post_comments", PostCommentsSchema);

module.exports = post_comments;

