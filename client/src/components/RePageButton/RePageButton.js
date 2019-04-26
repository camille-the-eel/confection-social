import React, { Component } from 'react';
// import { User as UserActions } from 'actions';
import rePageButton from '../../img/reblogButton.svg';
import rePageButtonClicked from '../../img/reblogButtonClicked.svg';
import './style.css';

class RePageButton extends Component {

    static defaultProps = {
        id: '',
        onRePage: () => {},
        src: rePageButton
    };

    handleClick = e => {
        if (!this.props.rePaged) {
            this.props.onRePage({ id: this.props.id, repaged: this.props.rePaged, src: rePageButtonClicked });
            // rePagePost(this.props.user.id, this.props.id);
        }
    };

    render() {
        return <img src={this.props.src} alt="rePageButton" className="rePageButton" onClick={this.handleClick} />;
    }
}

export default RePageButton;


//TO DO:
//connect the User/state.User to this action
//complete action in the Activity component