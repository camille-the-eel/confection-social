import React, { Component }  from "react";
import Navbar from "../../components/Nav";
import CommentSidebar from '../CommentSidebar/CommentSidebar.js';
import HomeSidebar from '../HomeSidebar/HomeSidebar.js';
import PostFull from '../../components/PostFull';

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Navbar />
                <h2>Welcome to your homepage</h2>
                <HomeSidebar />
            </div>
        )
    }
}

export default Home;