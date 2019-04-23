import React, { Component } from 'react';
import AvatarSidebar from '../../components/AvatarSidebar';
import Caption from '../../components/Caption';
import Source from '../../components/Sources/source';
import Credit from '../../components/Sources/credit';
import TimeAgo from '../../components/TimeAgo';
import Comment from './Comment/Comment';
import './style.css';

import commentButton from '../../img/commentButton.svg';
import closeButton from '../../img/closeButton.svg';

class CommentSidebar extends Component {

    render (props) {
        return (
            <div className="fixedDiv">
            <div className="commentSidebarContainer">
            <img src={closeButton} alt="closeButton" className="closeButton" onClick=""/>
                <div className="commentSidebar">
                    <div className="centeredDiv">
                        <div clasName="creatorDiv">
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
                            <div className="addComment" onClick="">
                                <p className="comment">ADD COMMENT</p>
                                <img src={commentButton} alt="commentButton" className="commentButton"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}

export default CommentSidebar;
