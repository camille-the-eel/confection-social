// Setting requires
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const dotenv = require("dotenv").config();
const dbConnection = require("./server/database");
const MongoStore = require("connect-mongo")(session);
const passport = require("./server/passport");
const path = require("path");

// Setting app parameters
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(morgan("dev"));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Sessions
app.use(
  session({
      secret: "vanilla-shakespeare",
      store: new MongoStore({ mongooseConnection: dbConnection }),
      resave: false,
      saveUninitialized: false
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Setting required database routes
const user = require("./server/routes/user");

// Using routes
app.use("/user", user);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
