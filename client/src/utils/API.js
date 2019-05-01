import axios from "axios";

export default {
    // Get a singluar page based off of page_title (passed through url)
    getPage: function(title) {
        return axios.get("/api/pages/" + title);
    },

    // Get basic information from page. Used for passing avatar and page title into avatars
    getPageBasic: function(id) {
        return axios.get("/api/pages/basic/" + id);
    },

    // Get all posts
    getPosts: function(userId) {
        return axios.post("/api/posts/home", userId);
    },

    // Call to get all comments for a provided post
    getComments: function(postId) {
        return axios.get("/api/posts/comments/" + postId);
    },

    // Add comment to a post using data passed through comment data
    addComment: function(commentData) {
        return axios.post("/api/posts/addcomment", commentData);
    },

    // Push current page into the following array of the user's currently active page
    followPage: function(followData) {
        return axios.post("/api/post_follows/follow", followData);
    },
    
    // Pop the current page out of the following array of the user's currently active page
    unFollowPage: function(unFollowData) {
        return axios.post("/api/post_follows/unfollow", unFollowData);
    },

    // Get following array for currently active user to check to see if page is being followed
    checkFollow: function(activeTitle) {
        return axios.get("/api/post_follows/checkfollow/" + activeTitle);
    },

    // Create new repage using existing post as base
    rePage: function(rePageData) {
        return axios.post("/api/posts/repage", rePageData);
    },

    // Explore call 
    explorePosts: function() {
        return axios.get("/api/posts/explore/")
    },

    // Create a new page
    addPage: function(pageData) {
        return axios.post("/api/pages/addpage", pageData)
    }

};