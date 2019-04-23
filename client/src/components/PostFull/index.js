import React, { Component } from 'react';
import PhotoPost from './Post/PhotoItem';
import TextPost from './Post/TextItem';
import PostMenu from './PostMenu';
import CommentButton from '../CommentButton';
import './style.css';

class PostFull extends Component {

    //conditional render photo vs text?

    // onClick={() => props.onClick()}

    render (props) {
        return (
            <div className="postDiv">
                <div className="postMenu">
                    <PostMenu/>
                </div>
                <div className="postContainer">
                    <PhotoPost onClick={this.props.onClick}/>
                </div>
            </div>
        )
    }

}

export default PostFull;