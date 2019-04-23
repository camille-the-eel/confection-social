import React, { Component } from 'react';
import defaultAvatar from '../../img/defaultAvatar.jpg';

class AvatarComment extends Component {

    // <img alt={props.name} src={props.image} />

    render () {
        return (
            <img src="https://via.placeholder.com/150" alt="test-avatar" style={{width:25}} />
        )
    }

}

export default AvatarComment;