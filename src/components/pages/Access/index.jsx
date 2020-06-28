import React from "react";
import * as axios from "axios";

import Login from "./Login";
import Signup from "./Signup";

import "./access.sass";

const Access = () => {

    //Triggered if the login form is submitted without errors
    async function loginCallback(loginResult) {

        try {
            const verifiedUser = await axios.post("http://localhost:3001/api/users/login", {
                email: loginResult.email,
                pwd: loginResult.password
            });
            
        } catch (error) {
            console.log(error);
        }
    };

    //Triggered if the sign up form is submitted without errors
    async function signupCallback(signupResult) {

        try {
            const newUser = await axios.post("http://localhost:3001/api/users/", {
                name: signupResult.newAlias,
                email: signupResult.newEmail,
                pwd: signupResult.newPassword
            });

        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received.
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error);
        }
    }

    return (
        <main className="main-login">
            <div className="form-container">
                <Login callback={loginCallback} />
                <Signup callback={signupCallback} />
            </div>
        </main>
    );
}

export default Access