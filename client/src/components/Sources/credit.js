import React, { Component } from 'react';
import './style.css';

class Credit extends Component {

    render () {
        return (
            <div>
                <p className="credit">CREDIT</p>
                <p className="creditContent">props.credit</p>
            </div>
        )
    }

}

export default Credit;