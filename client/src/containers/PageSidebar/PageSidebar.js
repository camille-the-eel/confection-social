import React, { Component } from 'react';
// import { Link } from "react-router-dom"
import Avatar from '../../components/Avatar/Avatar';
import { ReactComponent as FollowButton } from '../../img/followButton.svg';
import { ReactComponent as MessagesButton } from '../../img/messagesButton.svg';
import { ReactComponent as LikeButton } from '../../img/likeButton.svg';

// import CurrentUser from "../../AppContext";

import './style.css';

class PageSidebar extends Component {
    // constructor() {
    //     super()
    // }

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
        <div className="pageSidebarContainer">
            <ul className="pageSidebar">
                <div className="divList">
                    <div className="accountMenu">
                        <li className="pageAvatar">
                            <Avatar/>
                        </li>
                        <li>
                            <p className="activePage">props.pageName</p>
                            <FollowButton className="followButton"/>
                        </li>
                        <li className="descripContainer">
                            <p className="pageDescrip">page description..customizable to user</p>
                        </li>
                        <li>
                            <MessagesButton className="message"/>
                        </li>
                        <li>
                            <LikeButton className="like"/>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
        )
    }
}

export default PageSidebar;