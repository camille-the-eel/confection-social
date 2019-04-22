import React, { Component } from 'react';
import './style.css';

class Sources extends Component {

    render () {
        return (
            <div>
                <p className="source">SOURCE</p>
                <p className="sourceContent">props.source</p>
                <br/>
                <p className="credit">CREDIT</p>
                <p className="creditContent">props.credit</p>
            </div>
        )
    }

}

export default Sources;