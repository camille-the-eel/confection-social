import React, { Component } from 'react';
import CommentItem from "../CommentItem/CommentItem";

class CommentHeader extends Component {

    localClick = () => {
        console.log(this)
    } 
    
    render() {
        return (
            <div>
                <CommentItem></CommentItem>
            </div>
        )
    }
}

export default CommentHeader