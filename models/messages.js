// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Messages Schema
var MessagesSchema = new Schema({
    message_text: {
        type: String,
        required: true   
    },

    // Blog that has sent this message
    sender_ID: [
        {
            type: Schema.Types.ObjectId,
            ref: "blogs"
        }
    ]
});

var messages = mongoose.model("messages", MessagesSchema);

module.exports = messages;

