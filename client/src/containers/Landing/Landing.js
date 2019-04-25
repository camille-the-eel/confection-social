import React, { Component } from "react";
import { Link } from "react-router-dom"
import LoginForm from "./LoginForm";
import Style from '../../img/landing-sticks-01.svg';
import './style.css';

class LandingPage extends Component {

    render() {
        return (
            <div className="LandingPage">
                <h4 className="appName">confection</h4>
                <div className="loginForm">
                    <LoginForm updateUser={this.props.updateUser}/>
                    <Link to={"/signup/"}>
                        <button className="register">not registered? sign up here</button>
                    </Link>
                </div>
                <img src={Style} alt="deco" className="sticks"/>
            </div>
        )
    }
}

export default LandingPage;