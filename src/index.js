import React from "react";
import ReactDOM from "react-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import App from "./App";

const element = <ThemeProvider theme={ theme }><App /></ThemeProvider>
const rootElement = document.getElementById('root');


ReactDOM.render(element, rootElement)