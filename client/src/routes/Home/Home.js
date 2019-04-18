import React, { Component }  from "react";
import Navbar from "../../components/Nav";

class Homepage extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Navbar />
                <h2>Welcome to your homepage</h2>
            </div>
        )
    }
}

export default Homepage;