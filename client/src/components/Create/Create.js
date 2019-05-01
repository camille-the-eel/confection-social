import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import closeButton from '../../img/closeButton.svg';
import { ReactComponent as Checkmark } from '../../img/checkmark.svg';
import './style.css';
import { newPost } from "../../actions/Create_Photo";

import CurrentUser from "../../AppContext";

class Create extends Component {

    constructor() {
        super()
        this.state = {
            caption: "",
            credit: "",
            tagForm: "",
            tags: [],
            photo: "",
            url: "", 
            formClass: "postForm",
            checkClass: "hiddenCheck"
        }

        this.handleSubmit   = this.handleSubmit.bind(this)
        this.handleChange   = this.handleChange.bind(this)
        this.handleTags     = this.handleTags.bind(this)
    }

    //ON CHOOSING FILE FROM COMPUTER, STATE IS UPDATED WITH FILE DATA
    fileChanged(e) {
        const file = e.target.files[0];
        this.setState({
            photo: file
        }, () => {console.log("CHANGE", this.state.photo)});
    }

    //ON SUBMITTING FILE
    uploadFile(e) {
        e.preventDefault();

        //CREATING EMPY FORMDATA OBJECT
        let data = new FormData();

        //APPENDING KEY/VALUE PAIR FILE/STATE TO DATA OBJECT
        data.append('file', this.state.photo);

        //POSTING POPULATED FORMDATA TO ROUTE
        fetch('/api/posts/post', {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
            .then(data => {
            if (data.success) {
                console.log("SUCCESS");
                this.setState({
                    formClass: "hiddenForm",
                    checkClass: "checkSuccess"
                })
            } else {
                alert('Upload failed');
            }
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }  

    handleTags(e) {
        e.preventDefault();
        let newTag = this.state.tagForm

        this.state.tags.push(newTag);
        this.setState({ tagForm: "" });
    }

    handleSubmit(e) {
        e.preventDefault();

        const postData = {
            source: this.context.pages[0]._id,
            caption: this.state.caption,
            credit: this.state.credit,
            tags: this.state.tags,
            photo: this.state.photo,
            url: this.state.url
        };

        newPost(postData, () => {
            this.props.toggleCreate();
            this.setState({
                formClass: "postForm",
                checkClass: "hiddenCheck"
            });
        });
    };

    render (props) {
        return (
            <div id="divBody">
                <div id="padding form-horizontal formContainer">
                    <div className="photoDiv">
                        <h1 className="steps">
                            1.
                            <img src={closeButton} alt="closeButton" id="close" onClick={this.props.toggleCreate}/>
                        </h1>
                        <p id="photoHead">
                            photo
                        </p>
                        <Checkmark id="check" className={this.state.checkClass}/>
                        <form action="/api/posts/post" method="POST" enctype="multipart/form-data" id="postForm" className={this.state.formClass}>
                            <div className="custom-file">
                                <input type="file" name="post" className="postChoose" onChange={this.fileChanged.bind(this)}/>
                                <br/>
                                <input type="submit" value="Submit" className="postUpload" onClick={this.uploadFile.bind(this)}/>
                            </div>
                        </form>
                    </div>
                    <h1 className="steps">2.</h1>
                    <div className="form-group">
                        <div className="input-field">
                            <p id="urlHead">image url</p>
                            <input className="form-input"
                                id="url"
                                type="text"
                                name="url"
                                value={this.state.url}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="text-input">
                            <p id="captionHead">caption</p>
                            <textarea className="form-input"
                                id="caption"
                                name="caption"
                                value={this.state.caption}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-field">
                            <p id="creditHead">credit</p>
                            <input className="form-input"
                                id="credit"
                                type="text"
                                name="credit"
                                value={this.state.credit}
                                onChange={this.handleChange}
                            />
                        </div>    
                    </div>
                    {/* <div className="form-group">
                        <div className="input-field">
                            <p id="tagHead">tag</p>
                            <input className="form-input"
                                id="tagForm"
                                type="text"
                                name="tagForm"
                                value={this.state.tagForm}
                                onChange={this.handleChange}
                            />
                        </div>   
                        <button className="btn btn-small tag-button" onClick={this.handleTags}>Add Tag</button> 
                    </div> */}
                    <button className="postButton" onClick={this.handleSubmit}>post</button>
                </div>
            </div>
        )
    }
}

Create.contextType = CurrentUser;
export default Create;