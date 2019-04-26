import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"

class Avatar extends Component {

    componentDidMount() {
        console.log(this)
    }

    render () {
        return (
            <img
                src={this.props.children.avatar || "https://via.placeholder.com/250"} 
                alt="page-avatar" 
                style={{width:45}} 
            />
        )
    }
}

export default Avatar;

//TO DO:
//link avatar to user's pages on click