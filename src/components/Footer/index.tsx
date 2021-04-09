import { FC } from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1, 1),
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    a: {
        color: "white",
        fontSize: "15px",
    },
}));

const Copyright: FC = () => {
    const classes = useStyles();
    return (
        <h5 className="copyright">
            © {new Date().getFullYear()} Copyright:
            <a
                className="underline"
                rel="noopener noreferrer"
                href="https://github.com/alexiszamanidis"
                target="_blank"
            >
                <b className={classes.a}>{" Alexis Zamanidis"}</b>
            </a>
        </h5>
    );
};

const Footer: FC = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root} bgcolor="primary.main">
            <Copyright />
        </Box>
    );
};

export default Footer;
