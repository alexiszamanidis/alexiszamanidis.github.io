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
});

export default theme;
