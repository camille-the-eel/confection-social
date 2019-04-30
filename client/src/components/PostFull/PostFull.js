import React, { Component } from 'react';
import PhotoPost from './Post/PhotoItem';
// import TextPost from './Post/TextItem';
import PostMenu from './PostMenu/PostMenu';
import './style.css';

class PostFull extends Component {

    componentDidMount() {
        // console.log(this);
    }
    //conditional render photo vs text?

    render () {
        return (
            <div className="postDiv">
                <div className="postMenu">
                    <PostMenu>{this.props.children}</PostMenu>
                </div>
                <div className="postContainer">
                    <PhotoPost openComments={this.props.openComments}>{this.props.children}</PhotoPost>
                </div>
            </div>
        )
    }

}

export default PostFull;