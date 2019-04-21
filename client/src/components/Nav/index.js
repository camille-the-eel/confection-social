import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import AvatarNav from "../AvatarNav";
import { ReactComponent as SearchButton } from '../../img/searchButton.svg';
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
                        <ul>
                            <li>
                                <AvatarNav/>
                            </li>
                        </ul>
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
//display NavAvatar component(s) --link in the NavAv component?