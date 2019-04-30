import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"

// import API from "../../utils/API";

class AvatarNavbar extends Component {
    state = {
        image: "",
        source: "",
        page_title: "",
    }

    componentDidMount() {
        console.log(this);
        this.loadData();
    }

    // Check to see if avatar is being feed props from page sidebar, navbar or post.
    // If page sidebar or nav, push data into state
    // If post, fetch user data using source id
    loadData = () => {
        console.log("Load data firing")
    }

    // Take props and pass needed info into state
    fetchPageInfo = (pageID) => {
        console.log(pageID)
    }

    render () {
        return (
            <img
                src={this.state.image || "https://i.imgur.com/G5D1q3e.png"} 
                alt="page-avatar" 
                style={{width:45}} 
            />
        )
    }
}

export default AvatarNavbar;

//TO DO:
//link avatar to user's pages on click