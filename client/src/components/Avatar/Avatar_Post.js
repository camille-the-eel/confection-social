import React, { Component } from 'react';
import { Link } from "react-router-dom";
import defaultAvatar from '../../img/default-avatar.svg';

import API from "../../utils/API";

class AvatarPost extends Component {
    state = {
        image: "",
        source: "",
        page_title: "",
    }

    componentDidMount() {
        this.fetchPageInfo(this.props.children.source);
    }

    // Take props and pass needed info into state
    fetchPageInfo = (pageID) => {
        API.getPageBasic(pageID)
            .then(res => {
                this.setState({ 
                    image: res.data.avatar,
                    source: res.data._id,
                    page_title: res.data.page_title
                });
            })
            .catch(err => console.log(err));
    }

    render () {
        return (
            <Link to={"/pages/" + this.state.page_title}>
                <img value={this.state.page_title}
                    src={this.state.image || defaultAvatar } 
                    alt="page-avatar" 
                    style={{width:45}} 
                />
            </Link>
        )
    }
}

export default AvatarPost;