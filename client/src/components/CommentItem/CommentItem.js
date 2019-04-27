import React, { Component } from 'react';
import AvatarComment from '../Avatar/Avatar_Comment';
import './style.css';

class Comment extends Component {

    componentDidMount() {
        console.log(this)
    }

    localClick = () => {
        console.log("local click - comment item")
    }

    render () {
        return (
            <div className="creatorDiv">
                <div className="pageLink" onClick={this.localClick}>
                    <AvatarComment className="commentorAvatar"/>
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