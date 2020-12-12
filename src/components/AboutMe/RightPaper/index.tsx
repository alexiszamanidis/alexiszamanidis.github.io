import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { passionateAbout, hobbies } from "../config";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "90%",
    },
    title: {
        color: theme.palette.text.primary,
    },
    item: {
        margin: "15px",
    },
}));

function RightPaper() {
    const classes = useStyles();

    return (
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
    );
}

export default RightPaper;
