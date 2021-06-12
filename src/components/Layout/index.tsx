import { makeStyles } from "@material-ui/core";
import { FC } from "react";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        paddingBottom: theme.spacing(3),
    },
    footer: {
        marginTop: "auto",
    },
    tabs: {
        color: "white",
    },
}));

const Layout: FC = ({ children }) => {
    const classes = useStyles();

    return (
        <div data-test-id="layout" className={classes.root}>
            <div data-test-id="children" className={classes.main}>
                {children}
            </div>
            <div data-test-id="footer" className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
