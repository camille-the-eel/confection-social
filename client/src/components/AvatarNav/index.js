import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"

class AvatarNav extends Component {

    render () {
        return <img src="https://via.placeholder.com/150" alt="test-avatar" style={{width:45}} />
    }

}

export default AvatarNav;

//TO DO:
//display avatar(s) from database
//link avatar to user's blogs on click