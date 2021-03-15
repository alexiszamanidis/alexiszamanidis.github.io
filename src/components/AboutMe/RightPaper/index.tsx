import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { passionateAbout, hobbies, contacts, buttons } from "./config";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        height: "100%",
    },
    title: {
        color: theme.palette.text.primary,
    },
    item: {
        margin: "15px",
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
}));

const RightPaper: FC = () => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <div className={classes.item}>
                    <b className={classes.title}>Passionate about</b>
                    {passionateAbout.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.name} <br />
                            </div>
                        );
                    })}
                </div>
                <div className={classes.item}>
                    <b className={classes.title}>Hobbies</b>
                    {hobbies.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.name} <br />
                            </div>
                        );
                    })}
                </div>
                <div className={classes.item}>
                    <b className={classes.title}>Contact</b>
                    {contacts.map((contact, index) => {
                        return (
                            <a
                                key={index}
                                href={contact.link}
                                className="underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className="contact">
                                    <i className={classes.title + " " + contact.icon}></i>
                                    {contact.name}
                                </div>
                            </a>
                        );
                    })}
                </div>
                <div className={classes.item}>
                    {buttons.map((button, index) => {
                        return (
                            <a key={index} href={button.link} target="_blank" rel="noreferrer">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={button.icon}
                                >
                                    {button.text}
                                </Button>
                            </a>
                        );
                    })}
                </div>
            </Paper>
        </Grid>
    );
};

export default RightPaper;
