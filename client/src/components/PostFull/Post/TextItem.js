import React, { Component } from 'react';
import Caption from '../../Caption';
import Source from '../../Sources/source';
import Credit from '../../Sources/credit';
import CommentButton from '../../CommentButton';

class TextItem extends Component {

    render () {
        return (
            <div>
                <h1>Text test. ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h1>
                <div className="postDetails">
                    <div>
                        <Source className="source"/><Credit className="credit"/>
                    </div>
                    <div className="containCaption">
                        <Caption className="caption"/>
                    </div>
                    <CommentButton/>
                </div>
            </div>
            
        )
    }

}

export default TextItem;