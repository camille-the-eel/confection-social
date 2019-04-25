import React, { Component } from "react"
import { Link } from "react-router-dom"
import Avatar from "../../components/Avatar/Avatar";
import { ReactComponent as SearchButton } from '../../img/searchButton.svg';
import './style.css';

class Navbar extends Component {

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="nav">
                    <div className="nav-wrapper">
                        <Link to="/home" className="app-name left">
                            confection
                        </Link>
                        <ul>
                            <li className="avatars">
                                <Avatar/>
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