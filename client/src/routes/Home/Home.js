import React, { Component }  from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../../components/Nav";
import CommentSidebar from '../CommentSidebar/CommentSidebar.js';
import HomeSidebar from '../HomeSidebar/HomeSidebar.js';
import PostFull from '../../components/PostFull';
import CurrentUser from "../../AppContext";

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './style.css';

class Home extends Component {
    static contextType = CurrentUser;

    constructor() {
        super()
        this.state = {
            commentsHidden: true,
            menuHidden: false
        }
    }

    componentDidMount() {
        console.log(this);
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

    render() {
        if (!this.context.isUser) {
            return <Redirect to={{ pathname: "/" }} />
        } else {
            return (
            
                <div className="body">
                    <Navbar />
                    <HomeSidebar />
                    <CommentSidebar onClick={this.closeComments}/>
                    <PostFull onClick={this.openComments}/>
                </div>
            )
        }
    }
}

export default Home;