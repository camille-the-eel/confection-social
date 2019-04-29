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
    getPosts: function() {
        return axios.get("/api/posts/home")
    },

    addComment: function(commentData) {
        return axios.post("/api/posts/addcomment", commentData)
    },

    followPage: function(followData) {
        return axios.post("/api/post_follows/follow", followData)
    },
    
    unFollowPage: function(unFollowData) {
        return axios.post("/api/post_follows/unfollow", unFollowData)
    },

    checkFollow: function(activeTitle) {
        return axios.get("/api/post_follows/checkfollow/" + activeTitle)
    }

};