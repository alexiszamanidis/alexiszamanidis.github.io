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

export const Copyright: FC = () => {
    const classes = useStyles();
    return (
        <h5 data-test-id="copyright" className="copyright">
            © {new Date().getFullYear()} Copyright:
            <a
                className="underline"
                rel="noopener noreferrer"
                href="https://github.com/alexiszamanidis"
                target="_blank"
            >
                <b className={classes.a} data-test-id="copyright-name">
                    {" Alexis Zamanidis"}
                </b>
            </a>
        </h5>
    );
};

const Footer: FC = () => {
    const classes = useStyles();
    return (
        <Box data-test-id="footer" className={classes.root} bgcolor="primary.main">
            <Copyright data-test-id="copyright-inside-footer" />
        </Box>
    );
};

export default Footer;
