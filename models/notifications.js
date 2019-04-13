// Require mongoose to write to database
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Notifications Schema
var NotificationsSchema = new Schema({
    total_notifications: {
        type: Number,
        default: 0   
    },

    unread_notitications: {
        type: Number,
        default: 0
    },

});

var notifications = mongoose.model("notifications", NotificationsSchema);

module.exports = notifications;

