import React, { Component } from "react";
import config from './config';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./routes/NewUser/NewUser";
import LandingPage from "./routes/Landing/Landing";
import Homepage from "./routes/Home/Home";

//REQUIRE STREAM DEPENDENCY
var stream = require('getstream');

/* <StreamApp 
apiKey={config.stream.key}
appId={config.stream.appId}
token={config.stream.secret}
> */

class App extends Component {
  constructor() {
      super()
      this.state = {
          loggedIn: false,
          email: null
      }
      
      this.getUser = this.getUser.bind(this)
      this.componentDidMount = this.componentDidMount.bind(this)
      this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
      this.getUser()
  }

  updateUser (userObject) {
      this.setState(userObject)
  }

  getUser() {
      axios.get("/user/").then(response => {
          console.log("Get user response: ");
          console.log(response.data);
          if (response.data.user) {
              console.log("Get User: There is a user saved in the server session: ")

              this.setState({
                  loggedIn: true,
                  email: response.data.user.email
              })
          } else {
              console.log("Get user: no user");

              this.setState({
                  loggedIn: false,
                  email: null
              })
          }
      })
  }

  render() {
      return (
          <Router>
              <div className="App">
                  <Switch>
                  <Route 
                      exact path="/"
                      render={() => 
                          <LandingPage 
                              updateUser={this.updateUser}
                          />} 
                  />
                  <Route 
                      exact path="/home"
                      component={Homepage}
                  />
                  <Route 
                      path="/signup"
                      render={() => 
                          <Signup />}
                  />
                  </Switch>
              </div>
          </Router>
      );
  }
}

export default App;