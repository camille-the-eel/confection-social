import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Navbar from "../Nav/Nav";

import API from "../../utils/API";

import CurrentUser from "../../AppContext"

import "materialize-css/dist/css/materialize.min.css"
import "./style.css"

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

    handleSubmit = async event => {
        event.preventDefault();

        const newPage = {
            page_title: this.state.newPageTitle,
            userID: this.context.user
        }


        await API.addPage(newPage)
            .then(res => {
                if (res) {
                    this.setState({
                        newPageTitle: ""
                    })

                }
            })
            .catch(err => console.log(err));
        
        this.context.updatePages(this.context.user)
    }

    render() {
        return (
            <div className="body">
                {/* <Navbar /> */}
                <div className="settingsContainer">
                    <form className="form-horizontal formContainer">
                        <div className="form-group">
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="newPageTitle"
                                    name="newPageTitle"
                                    placeholder="new-page-title"
                                    value={this.state.newPageTitle}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-7"></div>
                            <button
                                className="col-1 col-mr-auto addPage"
                                onClick={this.handleSubmit}
                                type="submit"
                            >
                                add page
                            </button>
                            <br />
                            <Link to="/home">
                                <button
                                    className="col-1 col-mr-auto addPage"
                                    type="submit"
                                >
                                    done
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Settings.contextType = CurrentUser;
export default Settings