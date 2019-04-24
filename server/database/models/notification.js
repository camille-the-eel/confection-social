// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Notifications Schema
var NotificationSchema = new Schema({
    total_notifications: {
        type: Number,
        default: 0   
    },

    unread_notitications: {
        type: Number,
        default: 0
    },

});

var Notification = mongoose.model("notifications", NotificationSchema);

module.exports = Notification;

