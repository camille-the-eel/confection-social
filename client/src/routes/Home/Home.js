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
    }

    render() {
        return (
            <div className="body">
                <Navbar />
                <HomeSidebar />
            </div>
        )
    }
}

export default Home;