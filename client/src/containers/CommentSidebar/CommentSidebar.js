import React, { Component } from 'react';
import CommentHeader from "../../components/CommentHeader/CommentHeader";
import CommentButton from '../../components/CommentButton/CommentButton';
import CommentList from "../../components/CommentList/CommentList";
import './style.css';

import closeButton from '../../img/closeButton.svg';

class CommentSidebar extends Component {

    componentDidMount() {
        console.log(this);
    }

    localClick = () => {
        console.log("local click")
    }

    render () {
        return (
            <div className="fixedDiv">
            <div className="commentSidebarContainer">
            <img src={closeButton} alt="closeButton" className="closeButton" onClick={this.props.closeComments}/>
                <div className="commentSidebar">
                    <div className="centeredDiv">
                        <div className="creatorDiv">
                            <CommentHeader></CommentHeader>
                        </div>
                        <div className="commentsDiv">
                           <CommentList></CommentList>
                        </div>
                        <div className="inputCommentDiv">
                            <textarea className="commentInput"/>
                            <button className="addComment" onClick={this.localClick}>
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
