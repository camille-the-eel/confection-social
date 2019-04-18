import React, { Component } from 'react';
import { Link } from 'react-router';
import homeButton from '../../../public/img/homeButton.svg';

class HomeButton extends Component {

    static defaultProps = {
        to: '/',
        icon: <img src={homeButton} className="homeButton"/>,
        label: 'Home'
    };

    render() {
        const content = (
            <span>
                {this.props.icon}
                {this.props.label}
            </span>
        );

        if (typeof this.props.to == 'string') {
            return (
                <Link to={this.props.to}>
                    {content}
                </Link>
            );
        }

        return(
            <a href="#" onClick={this.props.to}>
                {content}
            </a>
        );
    }
}

export default HomeButton;

//TO DO:
//check functionalility on page