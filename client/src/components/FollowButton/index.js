import React, { Component } from 'react';
import { User as UserActions } from 'actions';
import followButton from '../../../public/img/followButton.svg';

class FollowButton extends Component {

    static defaultProps = {
        id: '',
        onFollow: () => {},
    };

    handleClick = e => {
        if (!this.props.followed) {
            this.props.onFollow({ id: this.props.id, followed: this.props.followed });
            followBlog(this.props.user.id, this.props.id);
        }
    };

    render() {
        return <img src={followButton} className="followButton" onClick={this.handleClick} />;
    }
}

export default FollowButton;

//still need to connect the User/state.User to this action
//still need to complete action in the Activity component