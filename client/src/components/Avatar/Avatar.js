import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"

// import API from "../../utils/API";

class Avatar extends Component {
    state = {
        image: "",
        source: "",
        page_title: "",
    }

    componentDidMount() {
        console.log(this);
    }

    // Take props and pass needed info into state
    fetchPageInfo = (pageID) => {
        console.log(pageID)
    }

    render () {
        return (
            <img
                src={/* this.props.children.avatar || this.fetchPageInfo(this.props.children.source) ||  */"https://via.placeholder.com/250"} 
                alt="page-avatar" 
                style={{width:45}} 
            />
        )
    }
}

export default Avatar;

//TO DO:
//link avatar to user's pages on click