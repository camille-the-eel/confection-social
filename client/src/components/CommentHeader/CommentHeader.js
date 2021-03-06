import React, { Component } from 'react';
import AvatarComment from '../../components/Avatar/Avatar_Comment';
import Caption from '../../components/Caption/Caption';
import Source from '../../components/Sources/source';
import Credit from '../../components/Sources/credit';

import { Link } from "react-router-dom";

import API from "../../utils/API";

class CommentHeader extends Component {
    state = {
        image: "",
        source: "",
        page_title: "",
    }

    componentDidMount() {
        // console.log(this)
        this.fetchPageInfo(this.props.children.source)
    } 

    // Take props and pass needed info into state
    fetchPageInfo = (pageID) => {
        API.getPageBasic(pageID)
            .then(res => {
                this.setState({ 
                    image: res.data.avatar,
                    source: res.data._id,
                    page_title: res.data.page_title
                });
                console.log(this.state)
            })
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                <Link to={"/pages/" + this.state.page_title}>
                    <AvatarComment className="creatorAvatar">{this.state.image}</AvatarComment>
                    <p className="pageName">{this.state.page_title}</p>
                </Link>
                <div className="pContent">
                    <Caption>{this.props.children.caption}</Caption>
                    <Source>{this.props.children.source}</Source>
                    {
                        this.props.children.credit ?
                        <Credit>
                            {this.props.children.credit}
                        </Credit> :
                        null
                    }
                </div>
            </div>
        )
    }
}

export default CommentHeader