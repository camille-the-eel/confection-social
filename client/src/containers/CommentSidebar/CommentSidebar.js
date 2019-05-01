import React, { Component } from 'react';
import CommentHeader from "../../components/CommentHeader/CommentHeader";
import CommentCreate from '../../components/CommentCreate/CommentCreate';
import CommentList from "../../components/CommentList/CommentList";
import './style.css';

import closeButton from '../../img/closeButton.svg';
import CurrentUser from '../../AppContext';

class CommentSidebar extends Component {

    // componentDidMount() {
    //     console.log(this);
    // }

    render () {
        return (
            <div className="fixedDiv">
                <div className="commentSidebarContainer">
                    <img src={closeButton} alt="closeButton" className="closeButton" onClick={this.props.closeComments}/>
                    <div className="commentSidebar">
                        <div className="centeredDiv">
                            <div className="creatorDiv">
                                <CommentHeader>{this.props.children}</CommentHeader>
                            </div>
                            <div className="commentsDiv">
                                <CommentList>{this.props.children.post_comments}</CommentList>
                            </div>
                            <CommentCreate refreshComments={this.props.refreshComments}>{this.props.children}</CommentCreate>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CommentSidebar.contextType = CurrentUser;
export default CommentSidebar; 
