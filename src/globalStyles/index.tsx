import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
    createStyles({
        "@global": {
            "*": {
                boxSizing: "border-box",
            },
            html: {
                height: "100%",
                width: "100%",
            },
            body: {
                backgroundColor: "#f4f6f8",
                height: "100%",
                width: "100%",
            },
            a: {
                textDecoration: "none",
            },
        },
    })
);

const GlobalStyles = () => {
    useStyles();

    return null;
};

export default GlobalStyles;
