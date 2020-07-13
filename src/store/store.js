import { createStore , combineReducers } from "redux";

import isLoggedReducer from "./reducers/isLogged";

const reducer = combineReducers({
    isLogged: isLoggedReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;