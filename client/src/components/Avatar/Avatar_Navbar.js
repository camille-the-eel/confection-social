import React, { Component } from 'react';
import { Link } from "react-router-dom"

import CurrentUser from "../../AppContext"

class AvatarNavbar extends Component {
    constructor(context) {
        super(context)
        this.state = {
            image: "",
            source: "",
            page_title: "",
            isPrimary: false
        }
    }

    componentDidMount() {
        this.loadData();
    }

    // Push context data into state
    loadData = () => {
        this.setState({
            image: this.props.children.avatar,
            source: this.props.children._id,
            page_title: this.props.children.page_title,
            isPrimary: this.props.children.isPrimary
        });
    }

    render () {
        return (
            <div>
                {
                    this.props.children.isPrimary ?  
                    <Link to={"/pages/" + this.state.page_title}>
                        <img
                            src={this.state.image || "https://i.imgur.com/G5D1q3e.png"} 
                            alt="page-avatar" 
                            style={{width:45}} 
                        />
                    </Link> 
                    :
                    <img
                        src={this.state.image || "https://i.imgur.com/G5D1q3e.png"} 
                        alt="page-avatar" 
                        style={{width:45, opacity:0.25}} 
                    />
                }
            </div>
        )
    }
}

AvatarNavbar.contextType = CurrentUser
export default AvatarNavbar;