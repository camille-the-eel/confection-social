import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Avatar from '../../Avatar/Avatar';
import ReblogButton from '../../RePageButton/RePageButton';
import LikeButton from '../../LikeButton/LikeButton';

class PostMenu extends Component {

    render () {
        return (
            <div className="menuDiv">
                <Link to="" className="inlineButton">
                    <Avatar/>
                </Link>
                <div className="reblog inlineButton">
                    <ReblogButton/>
                </div>
                <div className="like inlineButton">
                    <LikeButton/>
                </div>
            </div>
        )
    }

}

export default PostMenu;