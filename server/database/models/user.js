const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Create User Schema
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
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
    },
    
    dateCreate: {
        type: Date,
        default: Date.now
    },

    user_blogs: [
        {
            type: Schema.Types.ObjectId,
            ref: "blogs"
        }    
    ]   
})


module.exports = User = mongoose.model("users", UserSchema)
