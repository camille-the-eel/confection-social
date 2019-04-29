import React, { Component } from 'react';
import followButton from '../../img/followButton.svg';
import followButtonClicked from '../../img/followButtonClicked.svg';

import CurrentUser from "../../AppContext";
import API from "../../utils/API";

class FollowButton extends Component {
    state = {
        isFollowing: false,
    }  

    componentDidMount = () => {
        console.log(this);
        this.checkFollowStatus(sessionStorage.active_page)
    }

    // Calls to the api to get comments for the post that was clicked
    checkFollowStatus = (activeTitle) => {

        // Call to api to get array of followed blogs for the user's currently active page
        API.checkFollow(activeTitle)
            .then(res => {

                // Map response data into routes for comparsion with current route
                let followedPages = res.data;
                let followedRoutes = followedPages.map(page => "/pages/" + page)
                const currentRoute = window.location.pathname

                // Compare followed pages to current location. Change the state of the follow button to true if there is a match
                for (var i = 0; i < followedRoutes.length; i++) {
                    if (followedRoutes[i] === currentRoute) {
                        this.setState({ isFollowing: true })
                        return;
                        }
                }
                return null;

            })
            .catch(err => console.log(err));
        

    }


    // Function to add current page to the user's active page's follow list
    addFollow = page_title => {
        
        const followData = {
            userPage_title: this.context.pages[0].page_title,
            pageToFollow: page_title
        }

        // Calling API follow page function and passing through the two pieces of id data that we need
        // Upon successful follow, the isFollowing state is flipped to true
        API.followPage(followData)
            .then(() => {
                this.setState({ isFollowing: true })
            })
            .catch(err => console.log(err));

    }

    
    // Function to remove current page to the user's active page's follow list
    unFollow = page_title => {
        
        const unFollowData = {
            userPage_title: this.context.pages[0].page_title,
            pageToFollow: page_title
        }

        // Calling API unfollow page function and passing through the two pieces of id data that we need
        // Upon successful follow, the isFollowing state is flipped to true
        API.unFollowPage(unFollowData)
            .then(() => {
                this.setState({ isFollowing: false })
            })
            .catch(err => console.log(err));

    }

    // Handles logic whether to follow or unfollow current page
    handleClick = event => {
        event.preventDefault()

        if (this.state.isFollowing) {
            this.unFollow(this.props.page_title)
        } else {
            this.addFollow(this.props.page_title)
        }
    };

    render() {

        return <img        
                src={this.state.isFollowing ? followButtonClicked : followButton} 
                className="followButton" 
                alt="follow button"
                onClick={this.handleClick} 
                />
    }
}
 
FollowButton.contextType = CurrentUser;
export default FollowButton;