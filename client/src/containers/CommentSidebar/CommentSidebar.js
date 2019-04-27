import React, { Component } from 'react';
import AvatarComment from '../../components/Avatar/Avatar_Comment';
import Caption from '../../components/Caption/Caption';
import Source from '../../components/Sources/Source';
import Credit from '../../components/Sources/Credit';
import Comment from '../../components/CommentItem/CommentItem';
import CommentButton from '../../components/CommentButton/CommentButton';
import './style.css';

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
                            <div className="pageLink" onClick="">
                                <AvatarComment className="creatorAvatar"/>
                                <p className="pageName">props.pageName</p>
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
                            <div className="pageLink" onClick="">
                                <AvatarComment className="commentorAvator"/>
                                <p className="activePageName">props.activePageName</p>
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
