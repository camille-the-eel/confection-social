import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../Nav/Nav";

import API from "../../utils/API";

import CurrentUser from "../../AppContext"

import "materialize-css/dist/css/materialize.min.css"

class Settings extends Component {
    constructor (context) {
        super(context)
        this.state = {
            pageToUpdate: {},
            newPageTitle: "",   
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        console.log(this)
    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const newPage = {
            page_title: this.state.newPageTitle,
            userID: this.context.user
        }

        API.addPage(newPage)
            .then(res => {
                console.log("RES.DATA", res.data);
                console.log("CONTEXT", this.context)
            })
    }

    render() {
        return (
            <div className="body">
                {/* <Navbar /> */}
                <div>
                    <p>    
                        This is where the create page form will go
                    </p>
                </div>
            </div>
        )
    }
}

Settings.contextType = CurrentUser;
export default Settings