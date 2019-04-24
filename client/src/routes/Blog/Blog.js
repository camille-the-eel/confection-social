import React, { Component }  from "react";
import { Redirect } from "react-router-dom";
import CommentSidebar from '../CommentSidebar/CommentSidebar.js';
import BlogSidebar from '../BlogSidebar/BlogSidebar.js';
import Post from '../../components/PostFull/Post/PhotoItem';
import CurrentUser from "../../AppContext";

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';

class Blog extends Component {
    constructor() {
        super()
        this.state = {
            commentsHidden: true,
            sidebarHidden: false
        }
    }

    componentDidMount() {
        console.log(this);
    }

    openComments = () => {
        this.setState({
            commentsHidden: false,
            sidebarHidden: true
        })
    }

    closeComments = () => {
        this.setState({
            commentsHidden: true,
            sidebarHidden: false
        })
    }

    render() {
            return (
                <div className="body">
                    {!this.state.menuHidden && <BlogSidebar/>}
                    {!this.state.commentsHidden && <CommentSidebar closeComments={this.closeComments}/>}
                    <div className="postDiv">

                    </div>
                </div>
            )
    }
}

export default Blog;