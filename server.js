// Setting requires
const express       = require("express");
                      require("dotenv").config();
                      require("./server/database");

const path          = require("path");
const mongoose      = require("mongoose");
const bodyParser    = require("body-parser");
const passport      = require("passport");

const users         = require("./server/routes/api/users");

const PORT          = process.env.PORT || 3001;
const app           = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./server/config/passport")(passport);

// Routes
app.use("./server/routes/api/users", users);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));