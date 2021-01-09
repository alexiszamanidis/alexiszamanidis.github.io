import { makeStyles } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1, 1),
        backgroundColor: "#3F51B5",
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
        <h5>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a rel="noopener noreferrer" href="https://github.com/alexiszamanidis" target="_blank">
                <b className={classes.a}>{" Alexis Zamanidis"}</b>
            </a>
        </h5>
    );
};

const Footer: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Copyright />
        </div>
    );
};

export default Footer;
