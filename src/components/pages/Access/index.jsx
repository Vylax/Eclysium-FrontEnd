import React from "react";

import Login from "./Login"
import Signup from "./Signup"

import "./access.sass";

const Access = () => {

    //Triggered if the login form is submitted without errors
    function log(loginResult) {
        console.log(loginResult);
    }

    //Triggered if the sign up form is submitted without errors
    function log2(signupResult) {
        console.log(signupResult);
    }

    return (
        <main className="main-login">
            <div className="form-container">
                <Login callback={log} />
                <Signup callback={log2} />
            </div>
        </main>
    );
}

export default Access