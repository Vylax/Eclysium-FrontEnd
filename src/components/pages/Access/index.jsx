import React from "react";

import { Button, Typography, Link } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';

import styled from "styled-components";

import useForm from "../../Shared/Helpers/useForm.js";
import validateLogin from "../../Shared/Helpers/Validators/LoginFormValidationRules";
import validateSignup from "../../Shared/Helpers/Validators/SignupFormValidationRules";

import Input from "./Input"

import "./access.sass";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
        },
        padding: "10px 0px"
    },
    input: {
        borderColor: "#179df7 !important"
    },
    label: {
        color: "#179df7 !important",
    },
    contrastLabel: {
        color: "#eee !important"
    }
}))

const StyledAccountCircle = styled(AccountCircle)`
    font-size: 140px;
    color: #179df7;
`;

const ForgotPasswordContainer = styled.div`
    text-align: end;
    padding: 10px 0px;
`;

const ForgotPassword = styled(Link)`
    color: #179df7
`;

let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#179df7",
            contrastText: "#fff"
        }
    },
    typography: {
        fontSize: 14,
        button: {
            fontSize: 16
        }
    }
})
theme = responsiveFontSizes(theme);

const Login = () => {

    const classes = useStyles();

    const { loginValues, loginErrors, showLoginPassword, handleClickShowLoginPassword, handleLoginChange, handleLoginSubmit } = useForm(log, validateLogin);
    const { signupValues, signupErrors, showSignupPassword, handleClickShowSignupPassword, handleSignupChange, handleSignupSubmit } = useForm(log2, validateSignup);

    //Triggered if the login form is submitted without errors
    function log() {
        console.log(loginValues)
    }

    //Triggered if the sign up form is submitted without errors
    function log2() {
        console.log(signupValues)
    }

    return (
        <main className="main-login">
            <div className="form-container">
                {/* <ThemeProvider theme={theme}> */}
                <div className="login-container">
                    <StyledAccountCircle />
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

                        <br />
                        <hr />

                        <ForgotPasswordContainer>
                            <ForgotPassword href="/">Forgot Password?</ForgotPassword>
                        </ForgotPasswordContainer>

                        <Button type="submit" variant="contained" fullWidth color="primary">
                            <Typography style={{ fontWeight: 600 }} variant="button">Log in</Typography>
                        </Button>
                    </form>
                </div>
                <div className="signup-container">
                    <div className="opacity">
                        <Typography variant="h4" style={{ marginBottom: "40px", color: "#eee" }} >Create Account</Typography>
                        <form onSubmit={handleSignupSubmit} className={classes.root} noValidate autoComplete="off" action="#">
                            <Input
                                name="newAlias"
                                label="Alias"
                                type={[false, "text"]}
                                theme="contrast"
                                value={signupValues}
                                error={signupErrors}
                                handleChange={handleSignupChange}
                            />
                            <Input
                                name="newEmail"
                                label="Email Address"
                                type={[false, "text"]}
                                theme="contrast"
                                value={signupValues}
                                error={signupErrors}
                                handleChange={handleSignupChange}
                            />
                            <Input
                                name="newPassword"
                                label="Password"
                                type={[true, "text", "password", showSignupPassword]}
                                theme="contrast"
                                value={signupValues}
                                error={signupErrors}
                                handleChange={handleSignupChange}
                                toggleHandler={handleClickShowSignupPassword}
                            />
                            <br />
                            <hr />
                            <br />
                            <Button type="submit" variant="contained" fullWidth color="primary">
                                <Typography style={{ fontWeight: 600 }} variant="button">Sign up</Typography>
                            </Button>
                        </form>

                    </div>
                </div>
                {/* </ThemeProvider> */}


            </div>

        </main>
    );
}

export default Login