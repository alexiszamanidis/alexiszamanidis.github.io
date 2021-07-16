import { FC } from "react";
import Card from "@material-ui/core/Card";
import { CardComponentProps } from "./types";
import { Box, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CustomButtonLink from "../../../../CustomButtonLink";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
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
                <Typography data-test-id="card-component-name" color="textSecondary" gutterBottom>
                    <Box fontWeight={500}>{name}</Box>
                </Typography>
                <Typography data-test-id="card-component-description">{description}</Typography>
                <Typography data-test-id="card-component-language-star-fork">
                    <b>language</b>: {language} <i className={"fa fa-star"}></i>
                    {` ${stargazers_count} `}
                    <i className="fa fa-code-fork"></i>
                    {` ${forks_count} `}
                </Typography>
            </CardContent>
            <CardActions>
                <CustomButtonLink
                    data-test-id="card-component-custom-button-link"
                    link={html_url}
                    size="small"
                    icon={<i style={{ marginRight: "5px" }} className={"fa fa-github"}></i>}
                    text={"View on GitHub"}
                />
            </CardActions>
        </Card>
    );
};

export default CardComponent;
