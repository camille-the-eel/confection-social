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
            page: {},
            commentsHidden: true,
            sidebarHidden: false
        }
    }

    componentDidMount() {
        console.log(this);
        API.getPage(this.props.match.params.id)
            .then(res => {
                console.log(res);
                this.setState({ page: res.data});
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
                {!this.state.menuHidden && <PageSidebar>{this.state.page}</PageSidebar>}
                {!this.state.commentsHidden && <CommentSidebar closeComments={this.closeComments}/>}
                <div className="postDiv">
                    <PostFull />
                </div>
            </div>
        )
    }
}

export default Page;