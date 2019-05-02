import React, { Component } from 'react';
import { Link } from "react-router-dom"
import API from "../../utils/API"

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

    // Call to database to switch active page to the this avatar's page
    updateActive = () => {

        let switchData = {
            userID: this.context.user,
            currentPage: this.props.children._id
        }

        API.updateActive(switchData)
            .then(
                this.context.updatePages(this.context.user)
            )
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
                        onClick={this.updateActive}
                    />
                }
            </div>
        )
    }
}

AvatarNavbar.contextType = CurrentUser
export default AvatarNavbar;