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

    //ON CHOOSING FILE FROM COMPUTER, STATE IS UPDATED WITH FILE DATA
    fileChanged(e) {
        const file = e.target.files[0];
        this.setState({
          avatar: file
        });
    }

    //ON SUBMITTING FILE
    uploadFile(e) {
        e.preventDefault();

        //CREATING EMPY FORMDATA OBJECT
        let data = new FormData();

        //APPENDING KEY/VALUE PAIR FILE/STATE TO DATA OBJECT
        data.append('file', this.state.avatar);

        //POSTING POPULATED FORMDATA TO ROUTE
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