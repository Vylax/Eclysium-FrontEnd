import React from "react";
import styled from "styled-components";

import { Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle } from '@material-ui/icons';

import useForm from "../../Shared/Helpers/useForm.js";
import validateLogin from "../../Shared/Helpers/Validators/LoginFormValidationRules";

import Input from "./Input";



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
        },
        padding: "10px 0px"
    }
}));

const StyledAccountCircle = styled(AccountCircle)`
    font-size: 140px;
    color: #179df7;
`;

const ForgotPasswordContainer = styled.div`
    text-align: end;
    padding: 7px 0px;
`;

const ForgotPassword = styled(Link)`
    color: #179df7
`;

const SubmitButton = styled(Button)`
    margin: 5px 0px;
    background-color: #179df7;
    color: #eee;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.75;
    &:hover {
        background-color: #179df7;
    }
`;

const Login = (props) => {

    const { callback } = props;

    const classes = useStyles();

    const { loginValues, loginErrors, showLoginPassword, handleClickShowLoginPassword, handleLoginChange, handleLoginSubmit } = useForm(callback, validateLogin);

    return (
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

                
                <hr style={{margin: "5px 0px"}} />

                <ForgotPasswordContainer>
                    <ForgotPassword href="/">Forgot Password?</ForgotPassword>
                </ForgotPasswordContainer>

                <SubmitButton type="submit" variant="contained" fullWidth>
                    Log in
                </SubmitButton>
            </form>
        </div>
    );
}

export default Login
