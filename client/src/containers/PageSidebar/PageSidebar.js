import React, { Component } from 'react';
// import { Link } from "react-router-dom"
import Avatar from '../../components/Avatar/Avatar';
import { ReactComponent as FollowButton } from '../../img/followButton.svg';
import { ReactComponent as MessagesButton } from '../../img/messagesButton.svg';
import { ReactComponent as LikeButton } from '../../img/likeButton.svg';

import './style.css';

class PageSidebar extends Component {

    componentDidMount() {
        console.log(this);
    }

    render () {
        return (
        <div className="pageSidebarContainer">
            <ul className="pageSidebar">
                <div className="divList">
                    <div className="accountMenu">
                        <li className="pageAvatar">
                            <Avatar>{this.props.children}</Avatar>
                        </li>
                        <li>
                            <p className="activePage">{this.props.children.page_title}</p>
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