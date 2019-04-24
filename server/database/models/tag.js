// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Tags Schema
var TagSchema = new Schema({
    tag: {
        type: String,
        require: true  
    },

    slug: {
        type: String,
        unique: true
    }

});

var Tag = mongoose.model("tags", TagSchema);

module.exports = Tag;

