import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"

class Avatar extends Component {
    componentDidMount() {
        console.log(this)
    }

    render () {
        return <img
                    src={this.props.children || "https://via.placeholder.com/250"} 
                    alt="test-avatar" 
                    style={{width:45}} 
                />
    }

}

export default Avatar;

//TO DO:
//display avatar(s) from database
//link avatar to user's pages on click