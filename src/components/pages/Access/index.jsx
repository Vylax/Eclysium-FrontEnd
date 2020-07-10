import React from "react";
import * as axios from "axios";

import Login from "./Login";
import Signup from "./Signup";

import "./access.sass";

const Access = () => {

    //Triggered if the sign up form is submitted without errors
    async function signupCallback(signupResult) {

        try {

            const { newAlias, newEmail, newPassword } = signupResult;

            const newUser = await axios.post("http://localhost:3001/api/users/", {
                name: newAlias,
                email: newEmail,
                pwd: newPassword
            });

            console.log(newUser)

        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data);
                console.log(error.response);
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
                <Login/>
                <Signup callback={signupCallback} />
            </div>
        </main>
    );
}

export default Access