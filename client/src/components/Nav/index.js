import React, { Component } from "react"
import { Redirect, Route, Link } from "react-router-dom"
import axios from "axios";
import NavAvatar from "../NavAvatar";
import { ReactComponent as SearchButton } from '../../img/searchButton.svg';

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
                <SearchButton className="searchButton" alt="searchIcon"/>
            </div>
        )
    }
}

export default Navbar;

//TO DO:
//link search button to explore page
//display NavAvatar component(s) (link in the NavAv component)