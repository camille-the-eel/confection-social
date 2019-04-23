import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style.css';

class Create extends Component {

    componentDidMount() {
        var x = document.createElement("input");
        x.setAttribute("type", "file");
        x.setAttribute("id", "chooseFile");
        document.getElementById("upload").appendChild(x);
    }

    render () {
        return (
            <div id="divBody">
                <div className="photoDiv">
                    <h1>PHOTO</h1>
                    <div id="upload">
                    </div>
                </div>
                <div className="text-input">
                    <h1>CAPTION</h1>
                    <textarea className="commentInput"/>
                </div>
                <div className="input-field">
                    <h1>CREDIT</h1>
                    <input id="credit" type="text" className="validate addition"/>
                </div>
                <div className="input-field">
                    <h1>TAGS</h1>
                    <input id="tags" type="text" className="validate addition"/>
                </div>
                <button>POST</button>
            </div>
        )
    }
}

export default Create;