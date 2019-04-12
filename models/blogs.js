// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Blog Schema
var BlogsSchema = new Schema({
    blog_title: {
        type: String,
        unique: true,
        required: true
    },
    avatar: {
        type: String,
        default: "https://via.placeholder.com/150"
    },

    // Blogs associated with this blog
    associated_blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "blogs"
        }
    ],

    // Blogs followed by this blog
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: "blogs"
        }
    ]
    
});

var blogs = mongoose.model("blogs", BlogsSchema);

module.exports = blogs;

