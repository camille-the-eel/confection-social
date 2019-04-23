import React, { Component } from "react"
import { Redirect, Route, Link } from "react-router-dom"
import axios from "axios";
import NavAvatar from "../NavAvatar";
import searchButton, { ReactComponent as SearchButton } from '../../img/searchButton.svg';
import './style.css';

class Navbar extends Component {
    constructor() {
        super()
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log("navbar render, props: ")
        console.log(this.props);

        return (
            <div className="navbar-fixed">
                <nav className="nav">
                    <div className="nav-wrapper">
                        <Link to="/home" className="app-name left">
                            confection
                        </Link>
                        <Link to="/explore" className="right">
                             <SearchButton className="searchButton" alt="searchIcon"/>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;

//TO DO:
//link search button to explore page
//display NavAvatar component(s) (link in the NavAv component)