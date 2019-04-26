// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Post Res Schema
var PostRePageSchema = new Schema({
    post_repages: {
        type: Number,
        default: 0   
    }

});

var Post_repage = mongoose.model("post_repages", PostRePageSchema);

module.exports = Post_repage;

