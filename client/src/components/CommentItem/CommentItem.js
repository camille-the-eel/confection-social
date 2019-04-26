import React, { Component } from 'react';
import Avatar from '../Avatar/Avatar';
import './style.css';

class Comment extends Component {

    render () {
        return (
            <div clasName="creatorDiv">
                <div className="pageLink" onClick="">
                    <Avatar className="commentorAvatar"/>
                    <p className="pageName">props.pageName</p>
                </div>
                <div className="commentDiv">
                    <p className="previousComment">props.comment  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </p>
                </div>
            </div>
        )
    }

}

export default Comment;