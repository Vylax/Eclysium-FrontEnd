import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#179df7"
        }
    },
    typography: {
        button: {
            color: "#eee"
        },
        h1: {
            fontSize: 30
        },
        h2: {
            fontSize: 20,
            fontWeight: 600
        },
        h6: {
            fontSize: 16,
            fontWeight: 700
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;