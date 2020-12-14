import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function CardComponent({
    name,
    description,
    language,
    stargazers_count,
    forks_count,
}: {
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
}) {
    return (
        <Card style={{ height: "100%" }}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {name}
                </Typography>
                <Typography>{description}</Typography>
                <Typography>
                    <b>language</b>: {language} <i className={"fa fa-star"}></i>
                    {` ${stargazers_count} `}
                    <i className="fa fa-code-fork"></i>
                    {` ${forks_count} `}
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
}

export default CardComponent;
