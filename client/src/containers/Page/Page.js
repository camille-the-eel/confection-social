import React, { Component }  from "react";
import { Link } from "react-router-dom"
import CommentSidebar from '../CommentSidebar/CommentSidebar';
import PageSidebar from '../PageSidebar/PageSidebar';
import PostFull from "../../components/PostFull/PostFull";
import PageNav from "../../components/PageNav/PageNav";

import API from "../../utils/API"

import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';

class Page extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            pageInfo: {},
            postForComments: {},
            commentsHidden: true,
            sidebarHidden: false
        }
    }

    componentDidMount() {
        console.log(this);
        this.loadPosts();
    }

    // Loads all posts
    loadPosts = () => {
        API.getPage(this.props.match.params.id)
            .then(res => {
                this.setState({ 
                    pageInfo: res.data.pageInfo,
                    posts: res.data.posts
                });
                console.log(this.state)
            })
            .catch(err => console.log(err));
    }

    // Searches through the current posts state to get comments for the post that was clicked
    loadComments = (posts, _id, postId) => {
        console.log("Load Comments fired");
        for (var i = 0; i < posts.length; i++) {
            if (posts[i][_id] === postId) {
                return posts[i];
                }
        }
        return null;
    }

    // Fires when open comments button is clicked. Calls load comments button and passes through the post id of the comments button that was clicked
    openComments = (postId) => {
        let postForComments = this.loadComments(this.state.posts, "_id", postId)
        this.setState({
            postForComments: postForComments,
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
                <Link to="/home">
                    <PageNav/>
                </Link>
                <div className="contentContainer">    
                    {!this.state.menuHidden && <PageSidebar>{this.state.pageInfo}</PageSidebar>}
                    {!this.state.commentsHidden && <CommentSidebar closeComments={this.closeComments}>{this.state.postForComments}</CommentSidebar>}
                    <div className="postWindow">
                        {this.state.posts.map(post => (
                            <PostFull key={post._id} openComments={this.openComments}>
                                {post}
                            </PostFull>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;