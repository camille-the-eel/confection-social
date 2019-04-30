import React, { Component } from 'react';
import './style.css';

class Credit extends Component {

    componentDidMount() {
        // console.log(this);
    }
    
    render () {
        return (
            <div>
                <p className="credit">CREDIT</p>
                <p className="creditContent">{this.props.children}</p>
            </div>
        )
    }

}

export default Credit;