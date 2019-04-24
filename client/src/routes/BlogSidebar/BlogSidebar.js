import React, { Component } from 'react';
import { Link } from "react-router-dom"
import AvatarNav from '../../components/AvatarNav';
import { ReactComponent as FollowButton } from '../../img/followButton.svg';
import { ReactComponent as MessagesButton } from '../../img/messagesButton.svg';

import CurrentUser from "../../AppContext";

import './style.css';

class BlogSidebar extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        console.log(this);
    }

    dummyFunction() {
        console.log("dummy")
    }

    logout = () => { 
        this.context.logOut();
        console.log(this)
    }

    render () {
        return (
        <div className="blogSidebarContainer">
            <ul className="blogSidebar">
                <div className="divList">
                    <div className="accountMenu">
                        <li>
                            <AvatarNav/>
                        </li>
                        <li>
                            <p className="activeBlogPage">props.blogPageName</p>
                            <FollowButton className="followButton"/>
                        </li>
                        <li>
                            <p className="pageDescrip">page description..customizable to user</p>
                        </li>
                        <li>
                            <MessagesButton className="message"/>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
        )
    }
}

export default BlogSidebar;