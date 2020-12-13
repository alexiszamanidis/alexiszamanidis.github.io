import React, { useState, useEffect } from "react";
import GitHubService from "../../../services/GitHub";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
    root: {
        width: "300px",
        margin: "30px",
    },
    grid: {
        marginTop: "10px",
        marginBottom: "10px",
    },
    card: {
        height: "100%",
    },
    icon: {
        textAlign: "center",
        marginTop: "10px",
    },
});

interface GitHubRepository {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
}

function GitHub() {
    const [gitHubRepositories, setGitHubRepositories] = useState<GitHubRepository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        GitHubService.getUserRepositories("alexiszamanidis")
            .then(({ data }) => {
                setGitHubRepositories(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div className={`${classes.icon} fa-3x`}>
                <i className={"fa fa-github" + (loading === true ? " fa-spin" : "")}></i>
            </div>
            {error && <Alert severity="error">Something happened</Alert>}
            <Grid container spacing={3} className={classes.grid}>
                {gitHubRepositories.map((repo) => {
                    return (
                        <Grid item xs={12} sm={4} md={4} key={repo.id}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        {repo.name}
                                    </Typography>
                                    <Typography>{repo.description}</Typography>
                                    <Typography>
                                        <b>language</b>: {repo.language}{" "}
                                        <i className={"fa fa-star"}></i>
                                        {` ${repo.stargazers_count} `}
                                        <i className="fa fa-code-fork"></i>
                                        {` ${repo.forks_count} `}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">
                                        <i
                                            style={{ marginRight: "5px" }}
                                            className={"fa fa-github"}
                                        ></i>
                                        View on GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default GitHub;
