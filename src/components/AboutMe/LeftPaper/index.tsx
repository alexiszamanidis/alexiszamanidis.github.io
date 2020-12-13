import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { calculateAge } from "../../../utilities";
import GitHub from "../../../services/GitHub";
import Alert from "@material-ui/lab/Alert";

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

interface UserDataFields {
    name: string;
    avatar_url: string;
    location: string;
    bio: string;
}

function LeftPaper() {
    const classes = useStyles();

    const [userData, setUserData] = useState<UserDataFields>({
        name: "",
        avatar_url: "",
        location: "",
        bio: "",
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        GitHub.getUserData("alexiszamanidis")
            .then(({ data }) => {
                setUserData({
                    name: data.name,
                    avatar_url: data.avatar_url,
                    location: data.location,
                    bio: data.bio,
                });
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    return (
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                {error === true ? (
                    <Alert severity="error">Something happened</Alert>
                ) : (
                    <div>
                        <Avatar
                            alt="Alexis Zamanidis"
                            src={userData.avatar_url}
                            className={classes.avatar}
                        />
                        <div className={classes.item + " personal"}>
                            <i className={classes.title + " fa fa-user"}></i>
                            {userData.name} <i className={classes.title + " fa fa-map-marker"}></i>
                            {userData.location}{" "}
                            <i className={classes.title + " fa fa-birthday-cake"}></i>
                            {calculateAge("1998-01-20")}
                        </div>
                        <div className={classes.item}>
                            <b className={classes.title}>Summary</b> <br />
                            {userData.bio}
                        </div>
                    </div>
                )}
            </Paper>
        </Grid>
    );
}

export default LeftPaper;
