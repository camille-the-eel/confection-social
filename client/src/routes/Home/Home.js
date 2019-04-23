import React, { Component }  from "react";
import Navbar from "../../components/Nav";
import CommentSidebar from '../CommentSidebar/CommentSidebar.js';
import HomeSidebar from '../HomeSidebar/HomeSidebar.js';
import PostFull from '../../components/PostFull';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            commentsHidden: true,
            menuHidden: false,
            createHidden: true,
            feedHidden: false
        }
    }

    openComments = () => {
        this.setState({
            commentsHidden: false,
            menuHidden: true
        })
    }

    closeComments = () => {
        this.setState({
            commentsHidden: true,
            menuHidden: false
        })
    }

    toggleCreate = () => {
        this.setState({
            createHidden: !this.state.createHidden,
            feedHidden: !this.state.feedHidden
        })
    }

    // {!this.state.commentsHidden && <CommentSidebar onClick={this.closeComments}/>}

    render() {
        return (
            <div className="body">
                <Navbar />
                <HomeSidebar onClick={this.toggleCreate}/>
                <CommentSidebar onClick={this.closeComments}/>
                <PostFull onClick={this.openComments}/>
            </div>
        )
    }
}

export default Home;