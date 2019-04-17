import React, { Component } from 'react';
import { User as UserActions } from 'actions';
import likeButton from '../../../public/img/likeButton.svg';
import likeButtonClicked from '../../../public/img/likeButtonClicked.svg';

class LikeButton extends Component {

    static defaultProps = {
        id: '',
        onLike: () => {}
    };

}

export default LikeButton;