import React, { Component } from 'react';
import { Link } from "react-router-dom"
import AvatarSidebar from '../../AvatarSidebar';
import ReblogButton from '../../ReblogButton';
import LikeButton from '../../LikeButton';

class PostMenu extends Component {

    render () {
        return (
            <div className="menu">
                <Link to="" className="">
                    <AvatarSidebar/>
                </Link>
                <div className="reblog">
                    <ReblogButton/>
                </div>
                <div className="like">
                    <LikeButton/>
                </div>
            </div>
        )
    }

}

export default PostMenu;