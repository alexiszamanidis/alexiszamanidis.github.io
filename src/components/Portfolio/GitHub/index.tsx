import React, { useState, useEffect } from "react";
import GitHubService from "../../../services/GitHub";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import CardComponent from "./CardComponent";

const useStyles = makeStyles({
    root: {
        width: "300px",
        margin: "30px",
    },
    grid: {
        marginTop: "10px",
        marginBottom: "10px",
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
                            <CardComponent
                                name={repo.name}
                                description={repo.description}
                                language={repo.language}
                                stargazers_count={repo.stargazers_count}
                                forks_count={repo.forks_count}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}

export default GitHub;
