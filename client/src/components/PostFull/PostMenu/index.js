import React, { Component } from 'react';
import { Link } from "react-router-dom"
import AvatarSidebar from '../../AvatarSidebar';
import ReblogButton from '../../ReblogButton';
import LikeButton from '../../LikeButton';

class PostMenu extends Component {

    render () {
        return (
            <div className="menuDiv">
                <Link to="" className="inlineButton">
                    <AvatarSidebar/>
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