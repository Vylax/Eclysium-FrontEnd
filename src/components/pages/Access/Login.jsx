import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as axios from "axios";
import styled from "styled-components";
import Cookies from 'js-cookie'

import { Button, IconButton, Link, Collapse, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, Close } from '@material-ui/icons';
import { Alert, AlertTitle } from '@material-ui/lab';

import useForm from "../../Shared/Helpers/useForm.js";
import validateLogin from "../../Shared/Helpers/Validators/LoginFormValidationRules";

import Input from "./Input";



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            marginLeft: 0,
            width: '100%'
        },
        padding: "10px 0px"
    }
}));

// Styled Elements

const ErrorAlert = styled(Alert)`
    text-align: left;
    color: rgb(97, 26, 21);
`;

const ForgotPasswordContainer = styled.div`
    text-align: end;
    padding: 7px 0px;
`;

const Login = (props) => {
    // const { callback } = props;

    const classes = useStyles();

    // Hooks
    const history = useHistory();
    const [loginAlertVisibility, setLoginAlertVisibility] = useState(false);
    const { loginValues, loginErrors, showLoginPassword, handleClickShowLoginPassword, handleLoginChange, handleLoginSubmit } = useForm(loginCallback, validateLogin);

    //Triggered if the login form is submitted without errors
    async function loginCallback(loginResult) {
        try {
            setLoginAlertVisibility(false);
            const verifiedUser = await axios.post("http://localhost:3001/api/users/login", {
                email: loginResult.email,
                pwd: loginResult.password
            });
            Cookies.set('access-token', verifiedUser.headers.authorization, { expires: new Date(new Date().getTime() + (3600 * 1000)) });
            history.push("/profile");

        } catch (error) {
            console.log(error);
            setLoginAlertVisibility(true);
        }
    };

    return (
        <div className="login-container">
            <AccountCircle color="primary" style={{ fontSize: 140 }} />

            {/* Error login alert */}
            <Collapse in={loginAlertVisibility}>
                <ErrorAlert action={
                    <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setLoginAlertVisibility(false) }}>
                        <Close fontSize="inherit" />
                    </IconButton>
                } severity="error">
                    <AlertTitle><strong>Error</strong></AlertTitle>
                    Incorrect email and/or password
                </ErrorAlert>
            </Collapse>

            {/* Login form */}
            <form onSubmit={handleLoginSubmit} className={classes.root} noValidate autoComplete="off" action="#">
                <Input
                    name="email"
                    label="Email Address"
                    type={[false, "text"]}
                    theme="light"
                    value={loginValues}
                    error={loginErrors}
                    handleChange={handleLoginChange}
                />
                <Input
                    name="password"
                    label="Password"
                    type={[true, "text", "password", showLoginPassword]}
                    theme="light"
                    value={loginValues}
                    error={loginErrors}
                    handleChange={handleLoginChange}
                    toggleHandler={handleClickShowLoginPassword}
                />


                <hr style={{ margin: "5px 0px" }} />

                <ForgotPasswordContainer>
                    <Link color="primary" href="/">Forgot Password?</Link>
                </ForgotPasswordContainer>

                <Button color="primary" type="submit" variant="contained" fullWidth>
                    <Typography variant="button"><Box lineHeight={2} letterSpacing={2} fontWeight="700">Log in</Box></Typography>
                </Button>
            </form>
        </div>
    );
}

export default Login
