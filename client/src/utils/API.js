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

    getPost: function(id) {
        return axios.get("api/posts/comments" + id)
    }
};