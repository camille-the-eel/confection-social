import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
    constructor() {
        super() 
            this.state = {
                email: "",
                primaryBlog: "",
                password: "",
                confirmPassword: "",
                passwordMatch: false,
                redirectTo: null
            }

            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)   
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlePasswordCheck() {
        if (this.state.password === this.state.confirmPassword) {
            this.setState({ passwordMatch: true });
            this.handleAxiosPost();
        } else {
            console.log("Passwords do not match");
        }
    }

    handleAxiosPost() {
        // request to server to add a new email/primaryBlog/password
        axios.post("/user/", {
            email: this.state.email,
            primaryBlog: this.state.primaryBlog,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log("successful signup")
                    this.setState({
                        // redirect to login page
                        redirectTo: "/"
                    })
                } else {
                    console.log("username already taken")
                }
            }).catch(error => {
                console.log("signup error: ")
                console.log(error)
            })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("sign-up handleSubmit, email: ");
        console.log(this.state.email);
        // console.log(this.state);

        // Call password check
        this.handlePasswordCheck(this.state.password, this.state.confirmPassword);
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="SignupForm">
                    <h4>Sign up</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="email">Email</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="primaryBlog">Primary Blog Name</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="primaryBlog"
                                    name="primaryBlog"
                                    placeholder="primaryBlog"
                                    value={this.state.primaryBlog}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="confirmPassword">Confirm Password: </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="password"
                                    type="password"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                                onClick={this.handleSubmit}
                                type="submit"
                            >Sign up</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default Signup