import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom"

import API from "../../utils/API";

class AvatarComment extends Component {
    state = {
        image: "",
        source: "",
        page_title: "",
    }

    componentDidMount() {
        console.log(this);
        // this.fetchPageInfo(this.props.children.source);
    }

    // Take props and pass needed info into state
    // fetchPageInfo = (pageID) => {
    //     console.log(pageID)
    //     API.getPageBasic(pageID)
    //         .then(res => {
    //             console.log(res);
    //             this.setState({ 
    //                 image: res.data.avatar,
    //                 source: res.data._id,
    //                 page_title: res.data.page_title
    //             });
    //             console.log(this.state)
    //         })
    //         .catch(err => console.log(err));
    // }

    render () {
        return (
            <img
                src={/* this.state.image || */ "https://via.placeholder.com/250"} 
                alt="page-avatar" 
                style={{width:45}} 
            />
        )
    }
}

export default AvatarComment;

//TO DO:
//link avatar to user's pages on click 