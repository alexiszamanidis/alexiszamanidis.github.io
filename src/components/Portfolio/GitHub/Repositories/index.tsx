import { FC } from "react";
import { Grid } from "@material-ui/core";
import CardSkeleton from "./CardSkeleton";
import { Repo, RepoProps } from "./types";
import CardComponent from "./CardComponent";
import { numberOfSkeletons } from "./config";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    grid: {
        marginTop: "10px",
        marginBottom: "10px",
    },
});

const Repositories: FC<RepoProps> = ({ repositories, loading }) => {
    const classes = useStyles();

    return (
        <Grid data-test-id="repositories" container spacing={3} className={classes.grid}>
            {loading
                ? [...Array(numberOfSkeletons)].map((skeleton, skeletonIndex) => {
                      return (
                          <Grid item xs={12} sm={12} md={6} lg={4} key={skeletonIndex}>
                              <CardSkeleton timeout={skeletonIndex * 500} />
                          </Grid>
                      );
                  })
                : repositories.map((repo: Repo) => {
                      return (
                          <Grid
                              data-test-id="repository"
                              item
                              xs={12}
                              sm={12}
                              md={6}
                              lg={4}
                              key={repo.id}
                          >
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
