import { createMuiTheme, colors } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        background: {
            default: colors.common.white,
            paper: colors.common.white,
        },
        primary: {
            main: "#3F51B5",
        },
        secondary: {
            main: "#fff",
        },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});

export default theme;
