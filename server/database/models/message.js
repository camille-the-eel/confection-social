// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Messages Schema
var MessageSchema = new Schema({
    message_text: {
        type: String,
        required: true   
    },

    // Page that has sent this message
    sender_ID: [
        {
            type: Schema.Types.ObjectId,
            ref: "pages"
        }
    ]
});

var Message = mongoose.model("messages", MessageSchema);

module.exports = Message;

