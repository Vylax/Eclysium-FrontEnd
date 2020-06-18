import React from "react";

import { TextField, IconButton, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';


const useStyles = makeStyles(() => ({
    borderLight: { borderColor: "#179df7 !important" },
    textLight: { color: "#179df7 !important" },
    textContrast: { color: "#eee !important" }
}));

const Input = (props) => {

    const classes = useStyles();

    const { name, label, value, error, type, theme, handleChange, toggleHandler } = props;
    const [ canToggle, mainType, alternativeType, passwordShown ] = type;

    //* Setters of inputProps depending on theme

    let inputProps;

    if (theme === "light")
        inputProps = {
            classes: {
                notchedOutline: classes.borderLight
            }
        };

    if (theme === "contrast")
        inputProps = {
            classes: {
                root: classes.textContrast,
                focused: classes.textContrast,
                notchedOutline: classes.borderLight
            }
        };

    //* Added show/hide password button 

    if (canToggle)
        inputProps.endAdornment =
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleHandler}
                    style={theme === "contrast"
                        ? { color: "#eee" }
                        : { color: "rgba(0, 0, 0, 0.54)" }}
                    edge="end"
                >
                    {passwordShown
                        ? <Visibility />
                        : <VisibilityOff />}
                </IconButton>
            </InputAdornment>

    //* Setter of inputLabelProps depending on theme

    const inputLabelProps = theme === "light" ? { classes: { root: classes.textLight } } : { classes: { root: classes.textContrast } };


    return (
        <TextField
            required
            margin="normal"
            error={typeof error[`${name}`] !== 'undefined'}
            id={name}
            name={name}
            label={label}
            type={canToggle ? passwordShown ? mainType : alternativeType : mainType}
            variant="outlined"
            onChange={handleChange}
            value={value[`${name}`] || ""}
            helperText={error[`${name}`]}
            InputProps={inputProps}
            InputLabelProps={inputLabelProps}
        />
    )
}

export default Input