import React, { Component } from 'react';
import { User as UserActions } from 'actions';
import likeButton from '../../../public/img/likeButton.svg';
import likeButtonClicked from '../../../public/img/likeButtonClicked.svg';

class LikeButton extends Component {

    static defaultProps = {
        id: '',
        onLike: () => {},
        src: likeButton
    };

    handleClick = e => {
        if (!this.props.liked) {
            this.props.onLike({ id: this.props.id, liked: this.props.liked, src: likeButtonClicked });
            likePost(this.props.user.id, this.props.id);
        } else if (this.props.liked) {
            this.props.onLike({ id: this.props.id, liked: !this.props.liked, src: likeButton });
        }
    };

    render() {
        return <img src={this.props.src} className="likeButton" onClick={this.handleClick} />;
    }
}

export default LikeButton;

//still need to connect the User/state.User to this action
//still need to complete action in the Activity component