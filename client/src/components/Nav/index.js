import React, { Component } from "react"
import { Redirect, Route, Link } from "react-router-dom"
import axios from "axios";

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log("navbar render, props: ")
        console.log(this.props);

        return (
            <div>
                <header className="navbar App-header" id="nav-container">
                confection
                </header>
            </div>
        )
    }
}

export default Navbar