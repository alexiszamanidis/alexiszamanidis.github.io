import React from "react";
import Skills from "./Skills";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { aboutMe, passionateAbout, hobbies } from "./config";
import { calculateAge } from "../../utilities";

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
    title: {
        color: theme.palette.text.primary,
    },
    item: {
        margin: "15px",
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
                        <div className={classes.item + " personal"}>
                            <i className="fa fa-user"></i>
                            Alexis Zamanidis <i className="fa fa-map-marker" aria-hidden="true"></i>
                            Athens, Greece <i className="fa fa-birthday-cake"></i>
                            {calculateAge("1998-01-20")}
                        </div>
                        <div className={classes.item}>
                            <b className={classes.title}>Summary</b> <br />
                            {aboutMe.summary}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <div className={classes.item}>
                            <b className={classes.title}>Passionate about</b>
                            {passionateAbout.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.name} <br />
                                    </div>
                                );
                            })}
                        </div>
                        <div className={classes.item}>
                            <b className={classes.title}>Hobbies</b>
                            {hobbies.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.name} <br />
                                    </div>
                                );
                            })}
                        </div>

                        <div className={classes.item}>
                            <b className={classes.title}>Contact</b>

                            <div className="contact">
                                <i className="fa fa-phone"></i>
                                +30 698-044-3908
                            </div>

                            <div className="contact">
                                <i className="fa fa-envelope"></i>
                                alexiszamanidis@outlook.com
                            </div>
                        </div>
                        <div className={classes.item}>
                            <button className="button">
                                <i className="fa fa-github"></i>
                                GitHub
                            </button>
                            <button className="button">
                                <i className="fa fa-gitlab"></i>
                                GitLab
                            </button>
                            <button className="button">
                                <i className="fa fa-bitbucket"></i>
                                BitBucket
                            </button>
                            <button className="button">
                                <i className="fa fa-linkedin"></i>
                                LinkedIn
                            </button>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Skills />
        </Container>
    );
}

export default AboutMe;
