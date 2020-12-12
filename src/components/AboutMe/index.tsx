import React from "react";
import Skills from "./Skills";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { aboutMe, passionateAbout, hobbies } from "./config";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    grid: {
        marginTop: "10px",
        marginBottom: "10px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "90%",
    },
    avatar: {
        margin: "auto",
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

function AboutMe() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.root}>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Avatar
                            alt="Alexis Zamanidis"
                            src={aboutMe.avatar}
                            className={classes.avatar}
                        />
                        <br />
                        {aboutMe.summary}
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <b>Passionate about</b>
                        {passionateAbout.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.name} <br />
                                </div>
                            );
                        })}
                        <br />
                        <b>Hobbies</b>
                        {hobbies.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item.name} <br />
                                </div>
                            );
                        })}
                    </Paper>
                </Grid>
            </Grid>
            <Skills />
        </Container>
    );
}

export default AboutMe;
