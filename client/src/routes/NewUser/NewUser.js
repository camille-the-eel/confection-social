import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../utils/authController";
import Style from '../../img/landing-sticks-01.svg';
import './style.css';

class Register extends Component {
    constructor() {
        super() 
            this.state = {
                email: "",
                primaryBlog: "",
                password: "",
                password2: "",
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

    handleSubmit(event) {
        event.preventDefault()

        const newUser = {
            email: this.state.email,
            primaryBlog: this.state.primaryBlog,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(this);

        registerUser(newUser, () => {
            this.setState({ redirectTo: "/" })
        });
    };

    componentDidMount() {
        var x = document.createElement("input");
        x.setAttribute("type", "file");
        x.setAttribute("id", "chooseFile");
        document.getElementById("upload").appendChild(x);
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="SignupForm">
                    <p className="header">welcome!</p>
                    <form className="form-horizontal formContainer">
                        <div className="form-group">
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
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    placeholder="confirm password"
                                    type="password"
                                    name="password2"
                                    value={this.state.password2}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="text"
                                    id="primaryBlog"
                                    name="primaryBlog"
                                    placeholder="blog page name"
                                    value={this.state.primaryBlog}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div id="upload">
                        <p className="avatarHead">blog page avatar</p>
                        </div>
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="col-1 col-mr-auto signUp"
                                onClick={this.handleSubmit}
                                type="submit"
                            >sign up</button>
                        </div>
                    </form>
                    <img src={Style} className="sticks"/>
                </div>
            )
        }
    }
}

export default Register