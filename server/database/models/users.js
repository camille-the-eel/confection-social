// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// User Schema
var UsersSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true   
    },

    // Blogs associated with User
    associated_blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "blogs"
        }
    ]
});

var users = mongoose.model("users", UsersSchema);

module.exports = users;

