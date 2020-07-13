const isLoggedReducer = (state = false, {type, payload}) => {
    switch(type) {
        case 'SIGN_IN':
            return true;
        case 'SIGN_OUT':
            return false;
        default:
            return state;
    }
};

export default isLoggedReducer;