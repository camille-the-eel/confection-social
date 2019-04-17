import React, { Component } from "react";
import config from './config';

//REQUIRE STREAM DEPENDENCY
var stream = require('getstream');

/* <StreamApp 
apiKey={config.stream.key}
appId={config.stream.appId}
token={config.stream.secret}
> */

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
        </div>
    );
  }
}

export default App;
