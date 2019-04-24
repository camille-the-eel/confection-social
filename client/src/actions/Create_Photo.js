import axios from "axios";
import jwt_decode from "jwt-decode";

export const newPost = (postData, cb) => {
    axios
        .post("/api/posts/create", postData)
        
}