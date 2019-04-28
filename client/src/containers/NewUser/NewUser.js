import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { registerUser } from "../../utils/authController";
import Style from '../../img/landing-sticks-01.svg';
import './style.css';

class Register extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                email: "",
                primaryPage: "",
                password: "",
                password2: "",
                avatar: "",
                passwordMatch: false,
                redirectTo: null
            }

            this.loadFiles = this.loadFiles.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)   
    }

    // Changes state based on form inputs
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }  

    fileChanged(event) {
        const file = event.target.files[0];
        this.setState({
          avatar: file
        });
    }

    // Handles button click - primarily register button
    handleSubmit(event) {
        event.preventDefault();

        console.log("AV",`${this.state.avatar}`);

        // Creates a newUser based off of current state
        const newUser = {
            email: this.state.email,
            primaryPage: this.state.primaryPage,
            password: this.state.password,
            password2: this.state.password2,
            avatar: this.state.avatar,
            files: []
        };

        // Pushes newUser const into register user function from authController
        // If registration is successful, callback function fires and user is redirected to the root(login page) 
        registerUser(newUser, () => {
            this.setState({ redirectTo: "/" })
        });
    };

    loadFiles() {
        fetch('/avatars')
          .then(res => res.json())
          .then(files => {
            if (files.message) {
              console.log('No Files');
              this.setState({ files: [] })
            } else {
              this.setState({ files })
            }
          });
    }

    uploadFile(event) {
        event.preventDefault();
        let data = new FormData();
        data.append('file', this.state.avatar);
        console.log("UP",`${this.state.avatar}`);

        fetch('/avatars', {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        // .then(res => res.text())
        // .then(text => console.log("TEXT", text))
            .then(data => {
            if (data.success) {
                this.loadFiles();
            } else {
                alert('Upload failed');
            }
            });
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="SignupForm">
                    <p className="header">welcome!</p>
                    <form className="form-horizontal formContainer" enctype="multipart/form-data">
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
                                    id="primaryPage"
                                    name="primaryPage"
                                    placeholder="page name"
                                    value={this.state.primaryPage}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <input type="file" onChange={this.fileChanged.bind(this)}/>
                        <button onClick={this.uploadFile.bind(this)}>Upload Avatar</button>
                        {/* <div id="upload">
                        <p className="avatarHead">page avatar</p>
                        </div> */}
                        <div className="form-group ">
                            <div className="col-7"></div>
                            <button
                                className="col-1 col-mr-auto signUp"
                                onClick={this.handleSubmit}
                                type="submit"
                            >sign up</button>
                        </div>
                    </form>
                    <img src={Style} alt="deco" className="sticks"/>
                </div>
            )
        }
    }
}

export default Register