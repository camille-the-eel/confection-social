import React, { Component } from 'react';
import Caption from '../../Caption/Caption';
import Source from '../../Sources/Source';
import Credit from '../../Sources/Credit';
import commentButton from '../../../img/commentButton.svg';
import './style.css';

class PhotoItem extends Component {

    componentDidMount() {
        console.log(this);
    }

    render () {
        return (
            <div className="containPost">
                <img src={this.props.children.image_url || "https://via.placeholder.com/350"} alt="post" className="postImg"/>
                <div className="postDetails">
                    <div>
                        <Source className="source">{this.props.children.source}</Source>
                        <Credit className="credit">{this.props.children.credit}</Credit>
                    </div>
                    <div className="containCaption">
                        <Caption className="caption">{this.props.children.caption}</Caption>
                    </div>
                    <img src={commentButton} alt="allComments" className="commentButton" onClick={this.props.children.openComments}/>
                </div>
            </div>
        )
    }

}

export default PhotoItem;