import { Grid } from "@material-ui/core";
import { FC } from "react";
import CardComponent from "./CardComponent";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    grid: {
        marginTop: "10px",
        marginBottom: "10px",
    },
});

type Repo = {
    id: number;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
};

type RepoProps = {
    repositories: Repo[];
};

const Repositories: FC<RepoProps> = ({ repositories }) => {
    const classes = useStyles();

    return (
        <Grid data-test-id="repositories" container spacing={3} className={classes.grid}>
            {repositories.map((repo: Repo) => {
                return (
                    <Grid data-test-id="repository" item xs={12} sm={4} md={4} key={repo.id}>
                        <CardComponent
                            data-test-id="repository-card-component"
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
    );
};

export default Repositories;
