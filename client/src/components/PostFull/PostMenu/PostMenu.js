import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Avatar from '../../Avatar/Avatar';
import RePageButton from '../../RePageButton/RePageButton';
import LikeButton from '../../LikeButton/LikeButton';

class PostMenu extends Component {

    componentDidMount() {
        console.log(this);
    }

    render () {
        return (
            <div className="menuDiv">
                <Link to="" className="inlineButton">
                    <Avatar>{this.props.children}</Avatar>
                </Link>
                <div className="repage inlineButton">
                    <RePageButton/>
                </div>
                <div className="like inlineButton">
                    <LikeButton/>
                </div>
            </div>
        )
    }

}

export default PostMenu;