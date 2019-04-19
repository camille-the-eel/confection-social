import React, { Component } from 'react';
import Avatar from '../../components/Avatar';
import Caption from '../../components/Caption';
import Sources from '../../components/Sources';
import TimeAgo from '../../components/TimeAgo';
import Comment from './Comment';

import commentButton from '../../img/commentButton.svg';
import closeButton from '../../img/closeButton.svg';

class CommentSidebar extends Component {

    render () {
        return <img src={closeButton} alt="closeButton"/>
    }

}

export default CommentSidebar;

//jsx for original avatar/blogname/caption/sources/timeago

//comment components

//jsx for comment input with avatar/blogname/input/addcomment button
