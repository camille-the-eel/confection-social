import React, { Component } from 'react';
import PhotoPost from './Post/PhotoItem';
import TextPost from './Post/TextItem';
import PostMenu from './PostMenu';

class PostPlus extends Component {

    //conditional render photo vs text?

    render () {
        return (
            <div>
                <PostMenu/>
                <PhotoPost/>
            </div>
        )
    }

}

export default PostPlus;