// Setting requires
const express = require("express");
require("dotenv").config();

const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const routes = require("./server/routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = `mongodb+srv://${process.env.MONGO_UN}:${process.env.MONGO_PW}@confection-db-npp3q.mongodb.net/test?retryWrites=true`

// Connect to MongoDB
mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./server/config/passport")(passport);

// Routes
app.use(routes)


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/client/build'));
  // app.use('/static', express.static(path.join(__dirname, 'client/build')));
}

app.listen(PORT, function(){
  console.log("listening on: " + PORT);
});