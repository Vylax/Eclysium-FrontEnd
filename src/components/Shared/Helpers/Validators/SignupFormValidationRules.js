export default function validateSignup(values) {
    let errors = {};

    if (!values.newAlias) {
        errors.newAlias = 'Alias is required'; 
    }

    if (!values.newEmail) {
        errors.newEmail = 'Email address is required'; 
    } else if (!/\S+@\S+\.\S+/.test(values.newEmail)) {
        errors.newEmail = 'Email address is invalid'; 
    }

    if (!values.newPassword) {
        errors.newPassword = 'Password is required';
    } else if (values.newPassword.length < 8) {
        errors.newPassword = 'Password must be 8 or more characters';
    }

    return errors
}