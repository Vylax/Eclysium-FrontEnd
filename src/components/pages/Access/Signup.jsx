import React from "react"
import styled from "styled-components";

import { Button, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import useForm from "../../Shared/Helpers/useForm.js";
import validateSignup from "../../Shared/Helpers/Validators/SignupFormValidationRules";

import Input from "./Input"

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

const StyledTitle = styled.h1`
    margin-bottom: 40px;
    color: #eee;
    font-weight: 500;
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

const Signup = (props) => {

    const classes = useStyles();

    const { callback } = props;
    const { signupValues, signupErrors, showSignupPassword, handleClickShowSignupPassword, handleSignupChange, handleSignupSubmit } = useForm(callback, validateSignup);

    return (
        <div className="signup-container">
            <div className="opacity">
                <StyledTitle>Create Account</StyledTitle>
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
                    <hr style={{margin: "5px 0px 15px"}} />
                    <Button color="primary" type="submit" variant="contained" fullWidth>
                    <Typography variant="button"><Box lineHeight={2} letterSpacing={2} fontWeight="700">Sign Up</Box></Typography>
                    </Button>
                </form>

            </div>
        </div>
    );
}

export default Signup