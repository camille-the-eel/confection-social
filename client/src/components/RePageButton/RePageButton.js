import React, { Component } from 'react';
// import { User as UserActions } from 'actions';
import rePageButton from '../../img/reblogButton.svg';
import rePageButtonClicked from '../../img/reblogButtonClicked.svg';
import './style.css';

import CurrentUser from "../../AppContext";
import API from "../../utils/API";

class RePageButton extends Component {

    state = {
        isRepaged: false,
    }

    componentDidMount = () => {
        console.log(this);
    }

    rePage = (sourcePost) => {
        
        // Pull post data from props and add currently active page to object to be used in repage creation
        const rePageData = {
            sourcePost: sourcePost,
            rePagedBy: this.context.pages[0].page_title
        }

        console.log(rePageData);

        API.rePage(rePageData)
            .then(() => {
                this.setState({ isRepaged: true })
            })
            .catch(err => console.log(err));
    }

    // Handles logic on whether to repage or alert user that they have already repaged the current post
    handleClick = event => {
        event.preventDefault()

        if (this.state.isRepaged) {
            alert("You have already Repaged this Post")
        } else {
            this.rePage(this.props.post_info)
        }
    };

    render() {
        return <img 
                src={this.state.isRepaged ? rePageButtonClicked : rePageButton} 
                alt="rePageButton" 
                className="rePageButton" 
                onClick={this.handleClick} 
                />
    }
}

RePageButton.contextType = CurrentUser
export default RePageButton;