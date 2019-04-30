import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Caption from '../../Caption/Caption';
import Source from '../../Sources/source';
import Credit from '../../Sources/credit';
import commentButton from '../../../img/commentButton.svg';
import './style.css';

class PhotoItem extends Component {

    componentDidMount() {
        // console.log(this);
    } 

    render () {
        return (
            <div className="containPost">
                <img src={this.props.children.image_url || "https://via.placeholder.com/350"} alt="post" className="postImg"/>
                <div className="postDetails">
                
                    <div>
                        <Source className="source">{this.props.children.source}</Source>
                        <Credit className="credit">{this.props.children.credit}</Credit>
                        {
                            this.props.children.isRepaged ? 
                            <Link to={"/pages/" + this.props.children.repaged_by}>
                                <p className="credit">REPAGED BY</p>
                                <p className="creditContent">{this.props.children.repaged_by}</p>
                            </Link> :
                            null
                        }
                    </div>
                    <div className="containCaption">
                        <Caption className="caption">{this.props.children.caption}</Caption>
                    </div>
                    <img src={commentButton} alt="allComments" className="commentButton" 
                    
                    // Passing the id of the post through to open comments to be used in data call
                    onClick={() => this.props.openComments(this.props.children._id)}
                    />
                </div>
            </div>
        )
    }

}

export default PhotoItem;