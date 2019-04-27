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
                <Link to="/home">
                    <PageNav/>
                </Link>
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