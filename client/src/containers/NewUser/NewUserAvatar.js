import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Style from '../../img/landing-sticks-01.svg';
import './style.css';

class NewUserAvatar extends Component {
    constructor(props) {
        super(props) 
            this.state = {
                avatar: {},
                redirectTo: null
            }
    }

    //on choosing file from computer, state is updated with file data
    fileChanged(e) {
        const file = e.target.files[0];
        this.setState({
          avatar: file
        });
    }

    //on submitting file
    uploadFile(e) {
        e.preventDefault();

        //creating empy formdata object
        let data = new FormData();

        //appending key/value pair file/state to data object
        data.append('file', this.state.avatar);

        //posting populated formdata to route as json
        fetch('/api/users/avatars', {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
            .then(data => {
            if (data.success) {
                console.log("SUCCESS");
                this.setState({ redirectTo: "/" })
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
                <div className="newAvForm">
                    <p className="header">upload avatar</p>
                    <form action="/api/users/avatars" method="POST" enctype="multipart/form-data" id="avatarForm" className="formContainer">
                        <div className="custom-file">
                            <input type="file" name="avatarUp" className="avatarChoose" onChange={this.fileChanged.bind(this)}/>
                            <br/>
                            <input type="submit" value="Submit" className="avatarUpload" onClick={this.uploadFile.bind(this)}/>
                        </div>
                    </form>
                    <img src={Style} alt="deco" className="sticks"/>
                </div>
            )
        }
    }
}

export default NewUserAvatar;