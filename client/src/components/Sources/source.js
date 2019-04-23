import React, { Component } from 'react';
import './style.css';

class Source extends Component {

    render () {
        return (
            <div>
                <p className="source">SOURCE</p>
                <p className="sourceContent">props.source</p>
            </div>
        )
    }

}

export default Source;