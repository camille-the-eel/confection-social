import React, { Component } from "react";
import CommentButton from "../CommentButton/CommentButton";

import CurrentUser from "../../AppContext";
import API from "../../utils/API";
import AvatarComment from "../Avatar/Avatar_Comment";

import './style.css';

class CommentCreate extends Component {
    constructor(context, props) {
        super(context, props)
        this.state= {
            newComment: "",
            activePageIndex: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    // componentDidMount() {
    //     console.log(this)
    // }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    handleSubmit = async event => {
        event.preventDefault();


        const commentData = {
            post_id: this.props.children._id,
            comment_text: this.state.newComment,
            comment_author: this.context.pages[this.state.activePageIndex].page_title,
            cAuthor_id: this.context.pages[this.state.activePageIndex]._id,
            cAuthor_avatar: this.context.pages[this.state.activePageIndex].avatar
        };

        if (!commentData.comment_text) {
            alert("Please enter a comment")
        } else {
            await API.addComment(commentData)
                .then(res => {
                    if (res) {
                        this.setState({
                            newComment: ""
                        })
                    }
                })
                .catch(err => console.log(err));
        }

        this.props.refreshComments(this.props.children._id)    

    };

    render () {
        return (
            <div className="inputCommentDiv">
                <div className="currentPage">
                    <AvatarComment className="currentPageAvatar">{this.context.pages[this.state.activePageIndex].avatar}</AvatarComment>
                    <p className="pageName">{this.context.pages[this.state.activePageIndex].page_title}</p>
                </div>
                <div >
                    <textarea className="form-input commentInput"
                        id="newComment"
                        type="text"
                        name="newComment"
                        value={this.state.newComment}
                        onChange={this.handleChange}
                    />
                    <button className="addComment" onClick={this.handleSubmit}>
                        <p className="comment">ADD COMMENT</p>
                        <CommentButton className="commentButton"/>
                    </button>
                </div>
            </div>
        )
    }
}

CommentCreate.contextType = CurrentUser;
export default CommentCreate;