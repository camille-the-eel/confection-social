import React, { Component } from 'react';
import { Link } from "react-router-dom"
import AvatarPost from '../../Avatar/Avatar_Post';
import RePageButton from '../../RePageButton/RePageButton';
import LikeButton from '../../LikeButton/LikeButton';
import './style.css';

class PostMenu extends Component {

    componentDidMount() {
        // console.log(this);
    }

    render () {
        return (
            <div className="menuDiv">
                <div classame="align">
                    <Link to="" className="inlineButton AvImg">
                        <AvatarPost>{this.props.children}</AvatarPost>
                    </Link>
                    <div className="repage inlineButton">
                        <RePageButton post_info={this.props.children}/>
                        <br/>
                        <LikeButton/>
                    </div>
                </div>
            </div>
        )
    }

}

export default PostMenu;