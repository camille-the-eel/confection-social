import axios from "axios";
import setAuthToken from "./setAuthToken";

// export const addAvatar = (fileData, cb) => {
//     axios 
//         .post("/api/users/avatars", fileData)
//         .then(res => {
//             if (res) {
//                 cb()
//             }
//         })
//         .catch(err => {
//             console.log("FILE", err);
//         });
// }

// Register User
export const registerUser = (userData, cb) => {
    axios
        .post("/api/users/register", userData)
        // Redirect on successful login
        .then(res => {
            if (res) {
                cb()
            }
        })
        .catch(error => {
            console.error(error);
        });
};

// Login User
export const loginUser = (userData, cb) => {
    axios
        .post("/api/users/login", userData)
        .then(res => {
            // Save to session storage
            const { token } = res.data;
            sessionStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            cb();
        })
        .catch(error => {
            console.error(error);
        });
};

// Logout User
export const logoutUser = () => {
    console.log("Logout called")
    // Remove token from local storage
    sessionStorage.clear();
    console.log(sessionStorage);
    // Remove auth header for future requests
    setAuthToken(false);
};