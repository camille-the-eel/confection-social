import React, { Component } from 'react';
import './style.css';

class Source extends Component {

    componentDidMount() {
        console.log(this);
    }

    render () {
        return (
            <div>
                <p className="source">SOURCE</p>
                <p className="sourceContent">{this.props.children}</p>
            </div>
        )
    }

}

export default Source;