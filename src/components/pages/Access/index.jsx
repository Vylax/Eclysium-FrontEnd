import React from "react";

import { TextField, IconButton, InputAdornment, Button, Typography, Link } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { AccountCircle, Visibility, VisibilityOff } from '@material-ui/icons';

import useForm from "../../Shared/Helpers/useForm.js";
import validateLogin from "../../Shared/Helpers/Validators/LoginFormValidationRules";
import validateSignup from "../../Shared/Helpers/Validators/SignupFormValidationRules";

import "./login.sass" 

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

    //Triggered if the form is submitted without errors
    function log() {
        console.log(loginValues)
    }
    function log2() {
        console.log(signupValues)
    }

    return (
        <main className="main-login">
            <div className="form-container">
                <ThemeProvider theme={theme}>
                    <div className="login-container">
                        <AccountCircle color="primary" style={{ fontSize: 140,  }} />
                        <form onSubmit={handleLoginSubmit} className={classes.root} noValidate autoComplete="off" action="#">
                            <TextField
                                required
                                margin="normal"
                                error={typeof loginErrors.email !== 'undefined'}
                                // Custom id
                                id="loginEmail"
                                name="email"
                                label="Email address"
                                variant="outlined"
                                onChange={handleLoginChange}
                                value={loginValues.email || ""}
                                helperText={loginErrors.email}
                                InputProps={{
                                    classes: {
                                        /* Default styles from input element */
                                        /* root: classes.inputFocus,  */
                                        /* On focus from input element */
                                        /* focused: classes.inputFocus,  */

                                        /* Outline border from input element */
                                        notchedOutline: classes.input,
                                    },
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.label,
                                    }
                                }}
                            />
                            <TextField
                                required
                                margin="normal"
                                error={typeof loginErrors.password !== 'undefined'}
                                //Custom id
                                id="loginPassword"
                                name="password"
                                label="Contraseña"
                                type={showLoginPassword ? 'text' : 'password'}
                                variant="outlined"
                                onChange={handleLoginChange}
                                value={loginValues.password || ""}
                                helperText={loginErrors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowLoginPassword}
                                                edge="end"
                                            >
                                                {showLoginPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    classes: {
                                        notchedOutline: classes.input,
                                    },
                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.label,
                                    }
                                }}
                            />
                            <br />
                            <hr />

                            <Link href="/" variant="body2">
                                <Typography style={{ textAlign: "end", padding: "10px 0px" }}>Forgot Password?</Typography>
                            </Link>
                            <Button type="submit" variant="contained" fullWidth color="primary">
                                <Typography style={{ fontWeight: 600 }} variant="button">Log in</Typography>
                            </Button>
                        </form>
                    </div>
                    <div className="signup-container">
                        <div className="opacity">
                            <Typography variant="h4" style={{ marginBottom: "40px", color: "#eee" }} >Create Account</Typography>
                            <form onSubmit={handleSignupSubmit} className={classes.root} noValidate autoComplete="off" action="#">
                                <TextField
                                    required
                                    margin="normal"
                                    error={typeof signupErrors.newAlias !== 'undefined'}
                                    // Custom id
                                    id="signupAlias"
                                    name="newAlias"
                                    label="Alias"
                                    variant="outlined"
                                    onChange={handleSignupChange}
                                    value={signupValues.newAlias || ""}
                                    helperText={signupErrors.newAlias}
                                    InputProps={{
                                        classes: {
                                            root: classes.contrastLabel,
                                            focused: classes.contrastLabel,
                                            notchedOutline: classes.input,
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.contrastLabel,
                                        }
                                    }}
                                />
                                <TextField
                                    required
                                    margin="normal"
                                    error={typeof signupErrors.newEmail !== 'undefined'}
                                    // Custom id
                                    id="signupEmail"
                                    name="newEmail"
                                    label="Email Address"
                                    variant="outlined"
                                    onChange={handleSignupChange}
                                    value={signupValues.newEmail || ""}
                                    helperText={signupErrors.newEmail}
                                    InputProps={{
                                        classes: {
                                            root: classes.contrastLabel,
                                            focused: classes.contrastLabel,
                                            notchedOutline: classes.input,
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.contrastLabel,
                                        }
                                    }}
                                />
                                <TextField
                                    required
                                    margin="normal"
                                    error={typeof signupErrors.newPassword !== 'undefined'}
                                    //Custom id
                                    id="outlined-password-input"
                                    name="newPassword"
                                    label="Password"
                                    type={showSignupPassword ? 'text' : 'password'}
                                    variant="outlined"
                                    onChange={handleSignupChange}
                                    value={signupValues.newPassword || ""}
                                    helperText={signupErrors.newPassword}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowSignupPassword}
                                                    style={{ color: "#eee" }}
                                                    edge="end"
                                                >
                                                    {showSignupPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                        classes: {
                                            root: classes.contrastLabel,
                                            focused: classes.contrastLabel,
                                            notchedOutline: classes.input,
                                        },
                                    }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.contrastLabel,
                                        }
                                    }}
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
                </ThemeProvider>


            </div>

        </main>
    );
}

export default Login