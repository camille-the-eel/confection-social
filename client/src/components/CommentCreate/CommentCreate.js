import React, { Component } from "react";
import CommentButton from "../CommentButton/CommentButton";

import CurrentUser from "../../AppContext";
import API from "../../utils/API";
import AvatarComment from "../Avatar/Avatar_Comment";

class CommentCreate extends Component {
    constructor() {
        super()
        this.state= {
            newComment: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        console.log(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    handleSubmit(event) {
        event.preventDefault();

        const commentData = {
            post_id: this.props.children._id,
            comment_text: this.state.newComment,
            comment_author: this.context.pages[0].page_title,
            cAuthor_id: this.context.pages[0]._id,
            cAuthor_avatar: this.context.pages[0].avatar
        };

        // console.log(commentData)

        API.addComment(commentData)
            .then(res => {
                if (res) {
                    this.setState({
                        newComment: ""
                    })
                }
            })
            .catch(err => console.log(err));
    };

    render () {
        return (
            <div className="inputCommentDiv">
                <div className="currentPage">
                    <AvatarComment className="currentPageAvatar">{this.context.pages[0].avatar}</AvatarComment>
                    <p className="pageName">{this.context.pages[0].page_title}</p>
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