import React, { Component } from 'react';
import { User as UserActions } from 'actions';
import followButton from '../../img/followButton.svg';
import followButtonClicked from '../../img/followButtonClicked.svg';

class FollowButton extends Component {

    static defaultProps = {
        id: '',
        onFollow: () => {},
        src: followButton
    };

    handleClick = e => {
        if (!this.props.followed) {
            this.props.onFollow({ id: this.props.id, followed: this.props.followed, src: followButtonClicked });
            followBlog(this.props.user.id, this.props.id);
        }
    };

    render() {
        return <img src={this.props.src} className="followButton" onClick={this.handleClick} />;
    }
}

export default FollowButton;

//TO DO:
//connect the User/state.User to this action
//complete action in the Activity component