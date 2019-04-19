const mongoose = require("mongoose");
mongoose.Promise = global.Promise;


const db = "mongodb+srv://" + process.env.MONGO_UN + ":" + process.env.MONGO_PW + "@confection-db-npp3q.mongodb.net/test?retryWrites=true";

mongoose.connect(db).then(
    () => {
        console.log("Connected to Mongo");
        console.log(config);
    },
    err => {
        console.log("error connecting to Mongo: ");
        console.log(err);
    }
)

module.exports = mongoose.connection;