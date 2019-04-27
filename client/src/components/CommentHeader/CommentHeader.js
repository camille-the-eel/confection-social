import React, { Component } from 'react';
import AvatarComment from '../../components/Avatar/Avatar_Comment';
import Caption from '../../components/Caption/Caption';
import Source from '../../components/Sources/Source';
import Credit from '../../components/Sources/Credit';

class CommentHeader extends Component {

    localClick = () => {
        console.log(this)
    } 
    
    render() {
        return (
            <div>
                <div className="pageLink" onClick={this.localClick}>
                    <AvatarComment className="creatorAvatar"/>
                    <p className="pageName">props.pageName</p>
                </div>
                <div className="pContent">
                    <Caption/>
                    <Source/>
                    <Credit/>
                </div>
            </div>
        )
    }
}

export default CommentHeader