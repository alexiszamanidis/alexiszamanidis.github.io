import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { aboutMe } from "../config";
import { calculateAge } from "../../../utilities";

const useStyles = makeStyles((theme) => ({
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

function LeftPaper() {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <Avatar alt="Alexis Zamanidis" src={aboutMe.avatar} className={classes.avatar} />
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
    );
}

export default LeftPaper;
