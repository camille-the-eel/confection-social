const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Create User Schema
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    primaryBlog: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    }
})


module.exports = User = mongoose.model("users", UserSchema)
