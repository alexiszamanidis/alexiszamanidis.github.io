import { FC } from "react";
import Card from "@material-ui/core/Card";
import { CardComponentProps } from "./types";
import { Box, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CustomButtonLink from "../../../../CustomButtonLink";
import StarIcon from "@material-ui/icons/Star";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        // eslint-disable-next-line
        ["@media (min-width:1100px)"]: {
            flexDirection: "row",
        },
    },
    info: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        height: "25px",
        margin: "0 2px 0 2px",
        color: "black",
    },
});

const CardComponent: FC<CardComponentProps> = ({
    name,
    description,
    language,
    stargazers_count,
    forks_count,
    html_url,
}) => {
    const classes = useStyles();
    return (
        <Card data-test-id="card-component" className={classes.root}>
            <CardContent>
                <Typography
                    component={"span"}
                    data-test-id="card-component-name"
                    color="textSecondary"
                    gutterBottom
                >
                    <Box fontWeight={500}>{name}</Box>
                </Typography>
                <Typography component={"span"} data-test-id="card-component-description">
                    {description}
                </Typography>
                <Typography
                    component={"span"}
                    data-test-id="card-component-language-star-fork"
                    className={classes.details}
                >
                    <div className={classes.info}>
                        <b>language</b>: {language}
                    </div>
                    <div className={classes.info}>
                        <StarIcon className={classes.icon} />
                        {` ${stargazers_count} `}
                    </div>
                    <div className={classes.info}>
                        <img
                            src={"/images/ForkIcon.png"}
                            alt="GitHub Fork Icon"
                            className={classes.icon}
                        />
                        {` ${forks_count} `}
                    </div>
                </Typography>
            </CardContent>
            <CardActions>
                <CustomButtonLink
                    data-test-id="card-component-custom-button-link"
                    link={html_url}
                    size="small"
                    icon={<GitHubIcon />}
                    text={"View on GitHub"}
                />
            </CardActions>
        </Card>
    );
};

export default CardComponent;
