// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Likes Schema
var PostLikesSchema = new Schema({
    post_likes: {
        type: Number,
        default: 0   
    }

});

var post_likes = mongoose.model("post_likes", PostLikesSchema);

module.exports = post_likes;

