import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import closeButton from '../../img/closeButton.svg';
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
        }

        this.handleSubmit   = this.handleSubmit.bind(this)
        this.handleChange   = this.handleChange.bind(this)
        this.handleTags     = this.handleTags.bind(this)
    }

    componentDidMount() {
        var x = document.createElement("input");
        x.setAttribute("type", "file");
        x.setAttribute("id", "chooseFile");
        document.getElementById("upload").appendChild(x);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }  

    handleTags(event) {
        event.preventDefault();
        let newTag = this.state.tagForm

        this.state.tags.push(newTag);
        this.setState({ tagForm: "" });
    }

    handleSubmit(event) {
        event.preventDefault();

        const postData = {
            source: sessionStorage.blogID,
            caption: this.state.caption,
            credit: this.state.credit,
            tags: this.state.tags,
            photo: this.state.photo
        };

        newPost(postData, () => {
            this.props.toggleCreate();
        });
    };



    render (props) {
        return (
            <div id="divBody">
                <div id="padding form-horizontal formContainer">
                    <div className="photoDiv">
                        <p id="photoHead">
                            photo
                            <img src={closeButton} alt="closeButton" id="close" onClick={this.props.toggleCreate}/>
                        </p>
                        <div id="upload">
                        </div>
                    </div>
                    <div className="form-group">
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
                    <div className="form-group">
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
                    </div>

                    <button className="postButton" onClick={this.handleSubmit}>post</button>
                </div>
            </div>
        )
    }
}

Create.contextType = CurrentUser;
export default Create;