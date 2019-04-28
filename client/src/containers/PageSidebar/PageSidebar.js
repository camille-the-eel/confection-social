import React, { Component } from 'react';
// import { Link } from "react-router-dom"
import AvatarPageSidebar from '../../components/Avatar/Avatar_PageSidebar';
import FollowButton from '../../components/FollowButton/FollowButton';
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
                            <AvatarPageSidebar>{this.props.children}</AvatarPageSidebar>
                        </li>
                        <li>
                            <p className="activePage">{this.props.children.page_title}</p>
                            <FollowButton className="followButton" page_id={this.props.children._id}/>
                        </li>
                        {/* <li className="descripContainer">
                            <p className="pageDescrip">page description..customizable to user</p>
                        </li> */}
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