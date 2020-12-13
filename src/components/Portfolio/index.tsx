import React from "react";
import GitHub from "./GitHub";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function Portfolio() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.root}>
            <GitHub />
        </Container>
    );
}

export default Portfolio;
