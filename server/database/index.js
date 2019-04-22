const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const uri = `mongodb+srv://${process.env.MONGO_UN}:${process.env.MONGO_PW}@confection-db-npp3q.mongodb.net/test?retryWrites=true`

mongoose.connect(uri).then(
    () => {
        console.log("Connected to Mongo");
    },
    err => {
        console.log("error connecting to Mongo: ");
        console.log(err)
    }
)

module.exports = mongoose.connection;