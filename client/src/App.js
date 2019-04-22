import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./routes/NewUser/NewUser";
import LandingPage from "./routes/Landing/Landing";
import Homepage from "./routes/Home/Home";

import setAuthToken from "./utils/setAuthToken";
import CurrentUser from "./AppContext";

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
          isUser: false,
          user: null,
          setUser: this.setUser,
          logOut: this.logoutUser,
          logIn: this.logInUser
      };
  };

  componentDidMount() {
      this.checkIfUser()
  };

  setUser = newUser => {
      this.setState({ user: newUser })
  };

  checkIfUser = () => {
      const isToken = sessionStorage.getItem("jwtToken");
      if (isToken) {
          this.setState({ isUser: true })
      } else {
          this.setState({ isUser: false })
      }
  };

  login = () => {
      this.checkIfUser()
  };

  logoutUser = () => {
      sessionStorage.removeItem("jwtToken");
      setAuthToken(false);
      this.checkIfUser();
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
                      exact path="/homepage"
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