// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Reblogs Schema
var PostReblogsSchema = new Schema({
    post_reblogs: {
        type: Number,
        default: 0   
    }

});

var post_reblogs = mongoose.model("post_reblogs", PostReblogsSchema);

module.exports = post_reblogs;

