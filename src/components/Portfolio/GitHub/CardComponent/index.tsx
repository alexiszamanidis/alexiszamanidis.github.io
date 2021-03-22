import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import CustomButton from "../../../Button";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
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
                <CustomButton
                    link={html_url}
                    size="small"
                    icon={<i style={{ marginRight: "5px" }} className={"fa fa-github"}></i>}
                    text={"View on GitHub"}
                />
            </CardActions>
        </Card>
    );
}

export default CardComponent;
