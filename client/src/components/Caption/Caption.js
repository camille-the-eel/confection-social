import React, { Component } from 'react';

class Caption extends Component {

    componentDidMount() {
        // console.log(this);
    }

    render () {
        return <p className="caption">{this.props.children}</p>
    }

}

export default Caption;