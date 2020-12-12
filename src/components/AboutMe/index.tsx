import React from "react";
import Skills from "./Skills";
import LeftPaper from "./LeftPaper";
import RightPaper from "./RightPaper";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        marginTop: "10px",
        marginBottom: "10px",
    },
}));

function AboutMe() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.root}>
            <Grid container spacing={3} className={classes.grid}>
                <LeftPaper />
                <RightPaper />
            </Grid>
            <Skills />
        </Container>
    );
}

export default AboutMe;
