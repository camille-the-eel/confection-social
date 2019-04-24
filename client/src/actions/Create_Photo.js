import axios from "axios";

export const newPost = (postData, cb) => {
    axios
        .post("/api/posts/create", postData)
        .then(res => {
            if (res) {
                cb();
            }
        })
        .catch(error => {
            console.log(error)
        })

}