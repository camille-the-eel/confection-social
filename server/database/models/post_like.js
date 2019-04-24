// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Likes Schema
var PostLikeSchema = new Schema({
    post_likes: {
        type: Number,
        default: 0   
    }

});

var Post_like = mongoose.model("post_likes", PostLikeSchema);

module.exports = Post_like;

