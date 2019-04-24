import React, { Component }  from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/Nav";
import CommentSidebar from '../CommentSidebar/CommentSidebar.js';
import HomeSidebar from '../HomeSidebar/HomeSidebar.js';
import PostFull from '../../components/PostFull';
import CurrentUser from "../../AppContext";

import Create from '../Create/Create';

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

    componentDidMount() {
        // console.log(this);
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
            createHidden: !this.state.createHidden
        })
    }

    render() {
        if (!this.context.isUser) {
            return <Redirect to={{ pathname: "/" }} />
        } else {
            return (
                <div className="body">
                    <Navbar/>
                    {!this.state.menuHidden && <HomeSidebar toggleCreate={this.toggleCreate}/>}
                    {!this.state.commentsHidden && <CommentSidebar closeComments={this.closeComments}/>}
                    {!this.state.createHidden && <Create toggleCreate={this.toggleCreate}/>}
                    <div className="postMargin">
                        <PostFull openComments={this.openComments}/>
                    </div>
                </div>
            )
        }
    }
}

Home.contextType = CurrentUser;
export default Home;