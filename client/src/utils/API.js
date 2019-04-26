import axios from "axios";

export default {
    // Get a singluar page based off of id (passed through url)
    getPage: function(id) {
        return axios.get("/api/pages/" + id);
    },

    // Get all posts
    getPosts: function() {
        return axios.get("/api/posts/home")
    }
};