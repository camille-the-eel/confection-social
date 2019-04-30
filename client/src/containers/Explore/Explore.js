import React, { Component }  from "react";
import Navbar from "../Nav/Nav";
import CommentSidebar from '../CommentSidebar/CommentSidebar';
import PostFull from '../../components/PostFull/PostFull';
import CurrentUser from "../../AppContext";

import API from "../../utils/API";

import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';

class Explore extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            postForComments: {},
            commentsHidden: true,
            feedHidden: false
        }

    }

    componentDidMount() {
        console.log(this);
        this.loadPosts()
    }

    // Loads all posts (will eventually call posts for followed pages)
    loadPosts = () => {

        API.explorePosts()
            .then(res => {    
                console.log(res.data)            
                this.setState({ 
                    posts: res.data
                });
            })
            .catch(err => console.log(err));
    }

    // Fires when open comments button is clicked. Calls load comments button and passes through the post id of the comments button that was clicked
    openComments = async (postId) => {
        
        // Constant to have filled with data from database
        const postForComments = await 
            API.getComments(postId)
            .then(res => {
                console.log(res.data);
                return res.data
            })
            .catch(err => console.log(err));

        // Update state based off of the returned post comments and then open comments and close sidebar
        this.setState({
            postForComments: postForComments,
            commentsHidden: false,
            sidebarHidden: true
        })
    }

    closeComments = () => {
        this.setState({
            commentsHidden: true,
            menuHidden: false
        })
    }

    render() {
        return (
            <div className="body">
                {/* <Navbar/> */}
                {!this.state.commentsHidden && <CommentSidebar closeComments={this.closeComments}>{this.state.postForComments}</CommentSidebar>}
                {!this.state.posts ? 
                    <div className="postMargin">
                        <h2>There are no posts to display. Follow someone to see their posts here</h2>
                    </div>
                    :
                    <div className="postMargin">
                        {this.state.posts.map(post => (
                            <PostFull key={post._id} openComments={this.openComments}>
                                {post}
                            </PostFull>
                        ))}
                    </div>

                }
            </div>
        )
    }
}

Explore.contextType = CurrentUser;
export default Explore;