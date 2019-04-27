import React, { Component }  from "react";
// import { Redirect } from "react-router-dom";
import CommentSidebar from '../CommentSidebar/CommentSidebar';
import PageSidebar from '../PageSidebar/PageSidebar';
// import Post from '../PostFull/Post/PhotoItem';
// import CurrentUser from "../../AppContext";

import API from "../../utils/API"

import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';
import PostFull from "../../components/PostFull/PostFull";

class Page extends Component {
    constructor() {
        super()
        this.state = {
            pageInfo: {},
            posts: [],
            commentsHidden: true,
            sidebarHidden: false
        }
    }

    componentDidMount() {
        console.log(this);
        this.loadPosts();
    }

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

    // Calls to the api to get comments for the post that was clicked
    loadComments = (postId) => {
        console.log("Load Comments fired");
        console.log(postId);

        API.getPost(postId)
            .then(res => {
                console.log("Comments got")
                console.log(res)
            })
            .catch(err => console.log(err));
    }

    // Fires when open comments button is clicked. Calls load comments button and passes through the post id of the comments button that was clicked
    openComments = (postId) => {
        this.loadComments(postId)
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
                {!this.state.menuHidden && <PageSidebar>{this.state.pageInfo}</PageSidebar>}
                {!this.state.commentsHidden && <CommentSidebar closeComments={this.closeComments}/>}
                <div className="postDiv">
                    {this.state.posts.map(post => (
                        <PostFull key={post._id} openComments={this.openComments}>
                            {post}
                        </PostFull>
                    ))}
                </div>
            </div>
        )
    }
}

export default Page;