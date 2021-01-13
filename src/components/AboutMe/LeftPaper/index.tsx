import React, { FC } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { calculateAge } from "../../../utilities";
import GitHub from "../../../services/GitHub/GitHub";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useQuery } from "react-query";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "100%",
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

const LeftPaper: FC = () => {
    const classes = useStyles();

    const { isLoading, isError, data } = useQuery("userData", () =>
        GitHub.getUserData("alexiszamanidis").then(({ data }) => data)
    );

    return (
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                {isLoading ? (
                    <CircularProgress />
                ) : isError ? (
                    <Alert severity="error">Something happened</Alert>
                ) : (
                    <div>
                        <Avatar
                            alt="Alexis Zamanidis"
                            src={data.avatar_url}
                            className={classes.avatar}
                        />
                        <div className={classes.item + " personal"}>
                            <i className={classes.title + " fa fa-user"}></i>
                            {data.name} <i className={classes.title + " fa fa-map-marker"}></i>
                            {data.location}{" "}
                            <i className={classes.title + " fa fa-birthday-cake"}></i>
                            {calculateAge("1998-01-20")}
                        </div>
                        <div className={classes.item}>
                            <b className={classes.title}>Summary</b> <br />
                            {data.bio}
                        </div>
                    </div>
                )}
            </Paper>
        </Grid>
    );
};

export default LeftPaper;
