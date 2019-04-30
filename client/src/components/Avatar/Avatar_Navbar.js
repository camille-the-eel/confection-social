import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"

import CurrentUser from "../../AppContext"

class AvatarNavbar extends Component {
    constructor(context) {
        super(context)
        this.state = {
            image: "",
            source: "",
            page_title: "",
        }

    }
    

    componentDidMount() {
        console.log(this);
        this.loadData();

    }

    // Push context data into state
    loadData = () => {
        this.setState = {
            image: this.context.pages[0].avatar,
            source: this.context.pages[0]._id,
            page_title: this.context.pages[0].page_title,
        }    
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

AvatarNavbar.contextType = CurrentUser
export default AvatarNavbar;