import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    button: {
        margin: "5px 5px 5px 5px",
        color: "white",
        outline: "0px solid white",
        transition: "outline-offset 250ms ease",
        borderRadius: "0",
        "&:hover, &:focus": {
            outline: "2px solid white",
            outlineOffset: "-5px",
        },
    },
});

function CardComponent({
    name,
    description,
    language,
    stargazers_count,
    forks_count,
    html_url,
}: {
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}) {
    const classes = useStyles();
    return (
        <Card className={classes.root} style={{ height: "100%" }}>
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
                <a href={html_url} target="_blank" rel="noreferrer">
                    <Button
                        className={classes.button}
                        size="small"
                        variant="contained"
                        color="primary"
                    >
                        <i style={{ marginRight: "5px" }} className={"fa fa-github"}></i>
                        View on GitHub
                    </Button>
                </a>
            </CardActions>
        </Card>
    );
}

export default CardComponent;
