import React, { Component } from 'react';
import CommentItem from "../CommentItem/CommentItem";

class CommentList extends Component {

    componentDidMount() {
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

export default CommentList