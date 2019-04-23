import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CurrentUser from "../../AppContext";

import { loginUser } from "../../utils/authController";

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            redirectTo: null,
            token: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        loginUser(userData, () => {
            let context = this.context;
            console.log(context);
            context.logIn();
        })
    }
    
    render() {
        if (this.context.isUser) {
            return <Redirect to={{ pathname: "/home" }} />
        } else {
            return (
                <div>
                    <h4>Login</h4>
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
                                    placeholder="example@gmail.com"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">Password</label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input className="form-input"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-7"></div>
                            <button className="btn btn-primary col-1 col-mr-auto"
                                onClick={this.handleSubmit}
                                type="submit">
                            Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

LoginForm.contextType = CurrentUser;
export default LoginForm