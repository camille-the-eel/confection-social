import React, { Component } from 'react';
import AvatarSidebar from '../../components/AvatarSidebar';
import Caption from '../../components/Caption';
import Sources from '../../components/Sources';
import TimeAgo from '../../components/TimeAgo';
import Comment from './Comment';
import './style.css';

import commentButton from '../../img/commentButton.svg';
import closeButton from '../../img/closeButton.svg';

class CommentSidebar extends Component {

    render () {
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
                                <p className="caption">props.caption  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                                <p className="source">SOURCE</p>
                                <p className="sourceContent">props.source</p>
                                <br/>
                                <p className="credit">CREDIT</p>
                                <p className="creditContent">props.credit</p>
                            </div>
                        </div>
                        <div className="commentsDiv">
                           
                        </div>
                        <div className="inputCommentDiv">
                            <div className="blogLink" onClick="">
                                <AvatarSidebar className="commentorAvator"/>
                                <p className="activeBlogName">props.activeBlogName</p>
                            </div>
                            <div class="input-field col s12">
                                <textarea id="commentInput" className="materialize-textarea"></textarea>
                                <label for="commentInput">Comment</label>
                            </div>
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

//jsx for original avatar/blogname/caption/sources/timeago

//comment components

//jsx for comment input with avatar/blogname/input/addcomment button
