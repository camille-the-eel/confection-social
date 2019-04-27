import React, { Component } from 'react';
// import { User as UserActions } from 'actions';
import commentButton from '../../img/commentButton.svg';
import './style.css';

class CommentButton extends Component {
    
    static defaultProps = {
        id: '',
        onComment: () => {}
    };

    handleClick = e => {
        this.props.onComment({ id: this.props.id });
        // commentButton(this.props.user.id, this.props.id);
        // <CommentSidebar/>
    };

    render () {
        return <img src={commentButton} alt="commentButton" className="commentSVG" onClick={this.handleClick}/>;
    }

}

export default CommentButton; 

//TO DO:
//handle CommentSidebar displaying on click for correct post by id
//connect the User/state.User to this action
//complete action in the Activity component