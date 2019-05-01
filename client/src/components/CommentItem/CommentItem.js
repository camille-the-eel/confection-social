import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
                <Link to={"/pages/" + this.props.children.comment_author}>
                    <AvatarComment className="creatorAvatar">{this.props.children.cAuthor_avatar}</AvatarComment>
                    <p className="pageName">{this.props.children.comment_author}</p>
                </Link>
                <div className="commentDiv">
                    <p className="previousComment">
                        {this.props.children.comment_text}
                    </p>
                </div>
            </div>
        )
    }

}

export default Comment; 