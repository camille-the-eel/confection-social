// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Tags Schema
var PostTagSchema = new Schema({
    // post_tags: {
    //     type: Array,
    //     default: []   
    // },

    // Tags selected for this post
    sender_ID: [
        {
            type: Schema.Types.ObjectId,
            ref: "tags"
        }
    ]

});

var Post_tag = mongoose.model("post_tags", PostTagSchema);

module.exports = Post_tag;

