import React, { Component } from 'react';
import AvatarSidebar from '../../components/AvatarSidebar';
import Caption from '../../components/Caption';
import Source from '../../components/Sources/source';
import Credit from '../../components/Sources/credit';
import TimeAgo from '../../components/TimeAgo';
import Comment from './Comment/Comment';
import CommentButton from '../../components/CommentButton';
import './style.css';

import commentButton from '../../img/commentButton.svg';
import closeButton from '../../img/closeButton.svg';

class CommentSidebar extends Component {

    render () {
        return (
            <div className="fixedDiv">
            <div className="commentSidebarContainer">
            <img src={closeButton} alt="closeButton" className="closeButton" onClick={this.props.closeComments}/>
                <div className="commentSidebar">
                    <div className="centeredDiv">
                        <div className="creatorDiv">
                            <div className="blogLink" onClick="">
                                <AvatarSidebar className="creatorAvatar"/>
                                <p className="blogName">props.blogName</p>
                            </div>
                            <div className="pContent">
                                <Caption/>
                                <Source/>
                                <Credit/>
                            </div>
                        </div>
                        <div className="commentsDiv">
                           <Comment/>
                        </div>
                        <div className="inputCommentDiv">
                            <div className="blogLink" onClick="">
                                <AvatarSidebar className="commentorAvator"/>
                                <p className="activeBlogName">props.activeBlogName</p>
                            </div>
                            <textarea className="commentInput"/>
                            <button className="addComment" onClick="">
                                <p className="comment">ADD COMMENT</p>
                                <CommentButton className="commentButton"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}

export default CommentSidebar;
