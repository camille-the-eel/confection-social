import React, { Component } from 'react';
import Caption from '../../Caption/Caption';
import Source from '../../Sources/source';
import Credit from '../../Sources/credit';
import commentButton from '../../../img/commentButton.svg';
import './style.css';

class PhotoItem extends Component {

    render () {
        return (
            <div className="containPost">
                <img src="https://via.placeholder.com/350" alt="post"/>
                <div className="postDetails">
                    <div>
                        <Source className="source"/><Credit className="credit"/>
                    </div>
                    <div className="containCaption">
                        <Caption className="caption"/>
                    </div>
                    <img src={commentButton} alt="allComments" className="commentButton" onClick={this.props.children.openComments}/>
                </div>
            </div>
        )
    }

}

export default PhotoItem;