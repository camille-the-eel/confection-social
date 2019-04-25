import React, { Component }  from "react";
// import { Redirect } from "react-router-dom";
import CommentSidebar from '../CommentSidebar/CommentSidebar';
import PageSidebar from '../PageSidebar/PageSidebar';
// import Post from '../PostFull/Post/PhotoItem';
// import CurrentUser from "../../AppContext";

import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';

class Page extends Component {
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
                    {!this.state.menuHidden && <PageSidebar/>}
                    {!this.state.commentsHidden && <CommentSidebar closeComments={this.closeComments}/>}
                    <div className="postDiv">

                    </div>
                </div>
            )
    }
}

export default Page;