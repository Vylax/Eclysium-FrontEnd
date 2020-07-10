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
        h6: {
            fontSize: 16,
            fontWeight: 700
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;