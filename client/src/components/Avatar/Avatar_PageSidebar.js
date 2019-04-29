import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"

// import API from "../../utils/API";

class AvatarPageSidebar extends Component {
    state = {
        image: "",
        source: "",
        page_title: "",
    }

    componentDidMount() {
        console.log(this);
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

export default AvatarPageSidebar;