import React, { useState, useEffect } from "react";
import GitHubService from "../../../services/GitHub";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: "300px",
        margin: "30px",
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
                console.log(data[0]);
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
            <div className="fa-3x">
                <i className={"fa fa-github" + (loading === true ? " fa-spin" : "")}></i>
            </div>
            {gitHubRepositories.map((repo) => {
                return (
                    <Card key={repo.id} className={classes.root}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {repo.name}
                            </Typography>
                            <Typography>{repo.description}</Typography>
                            <Typography>
                                <b>language</b>: {repo.language} <i className={"fa fa-star"}></i>
                                {` ${repo.stargazers_count} `}
                                <i className="fa fa-code-fork"></i>
                                {` ${repo.forks_count} `}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">
                                <i style={{ marginRight: "5px" }} className={"fa fa-github"}></i>
                                View on GitHub
                            </Button>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
}

export default GitHub;
