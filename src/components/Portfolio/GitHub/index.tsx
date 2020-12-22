import React, { FC } from "react";
import GitHubService from "../../../services/GitHub";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import CardComponent from "./CardComponent";
import { useQuery } from "react-query";

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

const GitHub: FC = () => {
    const classes = useStyles();

    const { isLoading, isError, data } = useQuery("gitHubRepositories", () =>
        GitHubService.getUserRepositories("alexiszamanidis").then(({ data }) => data)
    );

    const gitHubFaIcon = (
        <div className={`${classes.icon} fa-3x`}>
            <i className={"fa fa-github" + (isLoading === true ? " fa-spin" : "")}></i>
        </div>
    );

    return (
        <div>
            {isLoading ? (
                gitHubFaIcon
            ) : isError ? (
                <Alert severity="error">Something happened</Alert>
            ) : (
                <div>
                    {gitHubFaIcon}
                    <Grid container spacing={3} className={classes.grid}>
                        {data.map((repo: any) => {
                            return (
                                <Grid item xs={12} sm={4} md={4} key={repo.id}>
                                    <CardComponent
                                        name={repo.name}
                                        description={repo.description}
                                        language={repo.language}
                                        stargazers_count={repo.stargazers_count}
                                        forks_count={repo.forks_count}
                                        html_url={repo.html_url}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            )}
        </div>
    );
};

export default GitHub;
