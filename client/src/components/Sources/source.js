import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './style.css';
import API from "../../utils/API";

class Source extends Component {

    state = {
        source: "",
        page_title: ""
    }

    componentDidMount() {
        this.fetchPageInfo(this.props.children);
    }

    // Take props and pass needed info into state
    fetchPageInfo = (pageID) => {
        API.getPageBasic(pageID)
            .then(res => {
                this.setState({ 
                    source: res.data._id,
                    page_title: res.data.page_title
                });
            })
            .catch(err => console.log(err));
    }

    render () {
        return (
            <Link to={"/pages/" + this.state.page_title}>
                <p className="source">SOURCE</p>
                <p className="sourceContent">{this.state.page_title}</p>
            </Link>
        )
    }

}
 
export default Source;