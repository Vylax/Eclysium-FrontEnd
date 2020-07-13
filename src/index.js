import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const element = <Provider store={store} ><ThemeProvider theme={theme}><App /></ThemeProvider></Provider>
const rootElement = document.getElementById('root');


ReactDOM.render(element, rootElement)