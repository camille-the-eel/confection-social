// Setting requires
const express = require("express");
                require("dotenv").config();

const path = require("path");
// const dbConfig = require('./dbconfig');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const routes = require("./server/routes");

const PORT = process.env.PORT || 3001;
const app = express();
// const socket = require('socket.io');
// const io = socket(server);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = `mongodb+srv://${process.env.MONGO_UN}:${process.env.MONGO_PW}@confection-db-npp3q.mongodb.net/test?retryWrites=true`

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./server/config/passport")(passport);

// Routes
app.use(routes);


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, "/client/public/index.html"));
});

const server = app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));


// //SOCKET ROUTES
// //on connection: do these actions
// io.on('connection', function(socket){
//   console.log("Socket Connection Successful", socket.id);

//   //listening for emit events from jsx
//   socket.on('create', function(data){
    
//     //send event data to database
    
//     //then! 
//     //send to all other sockets
//     io.sockets.emit('create', data);
//   })
// });

module.exports = server;