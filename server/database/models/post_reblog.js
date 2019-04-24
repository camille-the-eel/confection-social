// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Reblogs Schema
var PostReblogSchema = new Schema({
    post_reblogs: {
        type: Number,
        default: 0   
    }

});

var Post_reblog = mongoose.model("post_reblogs", PostReblogSchema);

module.exports = Post_reblog;

