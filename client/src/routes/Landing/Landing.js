import React, { Component } from "react";
import { Link } from "react-router-dom"
import LoginForm from "./LoginForm";

class LandingPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="LandingPage">
                {console.log("Landing Page object: ")}
                {console.log(this)}
                <LoginForm updateUser={this.props.updateUser}/>
                <Link to={"/signup/"}><button className="btn btn-primary">Not Registered? Sign up here</button>
                </Link>
            </div>
        )
    }
}

export default LandingPage