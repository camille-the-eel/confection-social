import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "./setAuthToken";

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
            console.log(token);
            // Decode token to get user's data
            const decoded = jwt_decode(token);
            // Set decoded id
            sessionStorage.setItem("id", decoded.id);
            console.log(decoded);
            cb();
        })
        .catch(error => {
            console.error(error);
        });
};

// Logout User
export const logoutUser = () => {
    // Remove token from local storage
    sessionStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
};