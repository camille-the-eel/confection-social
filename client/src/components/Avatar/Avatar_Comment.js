import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"

// import API from "../../utils/API";

class AvatarComment extends Component {

    componentDidMount() {
        console.log(this);
    }

    render () {
        return (
            <img
                src={this.props.children || "https://via.placeholder.com/250"} 
                alt="page-avatar" 
                style={{width:45}} 
            />
        )
    }
}

export default AvatarComment;

//TO DO:
//link avatar to user's pages on click 