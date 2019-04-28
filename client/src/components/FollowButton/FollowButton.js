import React, { Component } from 'react';
import followButton from '../../img/followButton.svg';
import followButtonClicked from '../../img/followButtonClicked.svg';

class FollowButton extends Component {

    state = {
        isFollowing: false
    }

    componentDidMount() {
        console.log(this);
    }

    handleClick = event => {
        event.preventDefault()

        if (this.state.isFollowing) {
            this.setState({ isFollowing: false })
        } else {
            this.setState({ isFollowing: true })
        }
    };

    render() {
        return <img
                src={this.state.isFollowing ? followButtonClicked : followButton} 
                className="followButton" 
                alt="follow button"
                onClick={this.handleClick} 
                />;
    }
}
 
export default FollowButton;