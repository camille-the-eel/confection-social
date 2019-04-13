// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Tags Schema
var PostTagsSchema = new Schema({
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

var post_tags = mongoose.model("post_tags", PostTagsSchema);

module.exports = post_tags;

