const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const config = require("../../config");

const uri = "mongodb://localhost:27017/authTest3"

mongoose.connect(uri).then(
    () => {
        console.log("Connected to Mongo");
        console.log(config);
    },
    err => {
        console.log("error connecting to Mongo: ");
        console.log(err);
        console.log(config);
    }
)

module.exports = mongoose.connection;