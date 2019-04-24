import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./routes/NewUser/NewUser";
import LandingPage from "./routes/Landing/Landing";
import Home from "./routes/Home/Home";
import Blog from './routes/Blog/Blog';

import setAuthToken from "./utils/setAuthToken";
import CurrentUser from "./AppContext";

//REQUIRE STREAM DEPENDENCY
var stream = require('getstream');


class App extends Component {
  constructor() {
      super()
      this.state = {
          isUser: false,
          user: null,
          setUser: this.setUser,
          logOut: this.logoutUser,
          logIn: this.logIn,
          checkIfUser: this.checkIfUser
      };
  };

  componentDidMount() {
      this.checkIfUser()
  };

  setUser = newUser => {
      this.setState({ user: newUser })
  };

  checkIfUser = () => {
      console.log("check user firing")
      console.log(sessionStorage)
      const isToken = sessionStorage.getItem("jwtToken");
      if (isToken) {
          this.setState({ isUser: true })
      } else {
          this.setState({ isUser: false })
      }
  };

  logIn = () => {
      this.checkIfUser()
  };

  logoutUser = () => {
      console.log("Logout called")
      sessionStorage.removeItem("jwtToken");
      sessionStorage.removeItem("id");
      setAuthToken(false);
      this.checkIfUser();
  }

  render() {
      return (
          <CurrentUser.Provider value={this.state}>
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
                        component={Home}
                    />
                     <Route 
                        exact path="/blog"
                        component={Blog}
                    />
                    <Route 
                        exact path="/blog"
                        component={Blog}
                    />
                    <Route 
                        path="/signup"
                        render={() => 
                            <Signup />}
                    />
                    </Switch>
                </div>
            </Router>
          </CurrentUser.Provider>
      );
  }
}

export default App;