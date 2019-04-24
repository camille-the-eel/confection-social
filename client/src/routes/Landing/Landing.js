import React, { Component } from "react";
import { Link } from "react-router-dom"
import LoginForm from "./LoginForm";
import './style.css';

class LandingPage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="LandingPage">
                <h4 className="appName">confection</h4>
                <div className="loginForm">
                    <LoginForm updateUser={this.props.updateUser}/>
                    <Link to={"/signup/"}>
                        <button className="register">Not Registered? Sign Up Here</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default LandingPage;