import React, { Component } from 'react';
import CommentItem from "../CommentItem/CommentItem";

class CommentList extends Component {

    componentDidMount() {
        console.log(this)
    }
    
    render() {
        return (
            <div>
                {this.props.children.map(comment => (
                    <CommentItem key={comment._id}>
                        {comment}
                    </CommentItem>
                ))}
            </div>
        )
    }
}

export default CommentList