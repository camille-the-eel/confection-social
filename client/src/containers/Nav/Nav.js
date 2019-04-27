import React, { Component } from "react"
import { Link } from "react-router-dom"
import AvatarNavbar from "../../components/Avatar/Avatar_Navbar";
import { ReactComponent as SearchButton } from '../../img/searchButton.svg';
import './style.css';

import CurrentUser from "../../AppContext";

class Navbar extends Component {
    
    state = {
        pages: []    
    }

    componentDidMount() {
        console.log(this);
        this.mapPages();
    }

    // Mapping the current users pages into 
    // !! Currently not actually changing the state of this component !!
    mapPages = () => {
        const pagesState = {...this.state};
        console.log(pagesState);
        console.log(this.context);
        let context = this.context
        let contextPages = context.pages.map(page => page);
        console.log(contextPages);
        pagesState.pages = contextPages.map(page => page)
        console.log(pagesState);
        this.setState({
            pages: contextPages.map(page => page)
        });
        console.log(this.state);
    }

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
                                <AvatarNavbar>{this.context.pages[0]}</AvatarNavbar>
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

Navbar.contextType = CurrentUser;
export default Navbar;