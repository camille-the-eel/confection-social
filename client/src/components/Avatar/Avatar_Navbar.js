import React, { Component } from 'react';
import { Link } from "react-router-dom"

import CurrentUser from "../../AppContext"

class AvatarNavbar extends Component {
    constructor(context, props) {
        super(context, props)
        this.state = {
            image: "",
            source: "",
            page_title: ""
        }
    }

    componentDidMount() {
        console.log(this);
        this.loadData();
    }

    // Push context data into state
    loadData = () => {
        this.setState({
            image: this.props.children.avatar,
            source: this.props.children._id,
            page_title: this.props.children.page_title,
        });
    }

    render () {
        return (
            <Link to={"/pages/" + this.state.page_title}>
                <img
                    src={this.state.image || "https://i.imgur.com/G5D1q3e.png"} 
                    alt="page-avatar" 
                    style={{width:45}} 
                />
            </Link>
        )
    }
}

AvatarNavbar.contextType = CurrentUser
export default AvatarNavbar;