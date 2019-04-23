import React, { Component } from 'react';
import Caption from '../../Caption';
import Source from '../../Sources/source';
import Credit from '../../Sources/credit';
import CommentButton from '../../CommentButton';
import './style.css';

class PhotoItem extends Component {

    render () {
        return (
            <div>
                <img src="https://via.placeholder.com/350" alt="photo post test"/>
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

export default PhotoItem;