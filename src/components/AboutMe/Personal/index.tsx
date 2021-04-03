import { FC } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { calculateAge } from "../../../utilities";
import GitHub from "../../../services/GitHub/GitHub";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useQuery } from "react-query";
import { buttons, contacts, hobbies, passionateAbout } from "./config";
import CustomButtonLink from "../../CustomButtonLink";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        height: "100%",
    },
    avatar: {
        margin: "auto",
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    summary: {
        textAlign: "center",
    },
    title: {
        color: theme.palette.text.primary,
    },
    item: {
        margin: "15px",
    },
    buttons: {
        textAlign: "center",
    },
}));

const Personal: FC = () => {
    const classes = useStyles();

    const { isLoading, isError, data } = useQuery("userData", () =>
        GitHub.getUserData("alexiszamanidis").then(({ data }) => data)
    );

    return (
        <Paper className={classes.paper}>
            {isLoading ? (
                <CircularProgress />
            ) : isError ? (
                <Alert severity="error">Something happened</Alert>
            ) : (
                <div>
                    <Avatar
                        alt="Alexis Zamanidis"
                        src={data.avatar_url}
                        className={classes.avatar}
                    />
                    <div className={classes.summary}>
                        <div className={classes.item + " personal"}>
                            <i className={classes.title + " fa fa-user"}></i>
                            {data.name} <i className={classes.title + " fa fa-map-marker"}></i>
                            {data.location}{" "}
                            <i className={classes.title + " fa fa-birthday-cake"}></i>
                            {calculateAge("1998-01-20")}
                        </div>
                        <div className={classes.item}>
                            <b className={classes.title}>
                                <h3>Summary</h3>
                            </b>
                            {data.bio}
                        </div>
                    </div>
                </div>
            )}
            <div className={classes.item}>
                <ol>
                    <b className={classes.title}>
                        <h3>Passionate about</h3>
                    </b>
                    {passionateAbout.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.name} <br />
                            </li>
                        );
                    })}
                </ol>
            </div>
            <div className={classes.item}>
                <ol>
                    <b className={classes.title}>
                        <h3>Hobbies</h3>
                    </b>
                    {hobbies.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.name} <br />
                            </li>
                        );
                    })}
                </ol>
            </div>
            <div className={classes.item}>
                <ol>
                    <b className={classes.title}>
                        <h3>Contact</h3>
                    </b>
                    {contacts.map((contact, index) => {
                        return (
                            <a
                                key={index}
                                href={contact.link}
                                className="underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="contact">
                                    <i className={classes.title + " " + contact.icon}></i>
                                    {contact.name}
                                </li>
                            </a>
                        );
                    })}
                </ol>
            </div>
            <div className={classes.buttons}>
                <div className={classes.item}>
                    {buttons.map((button, index) => {
                        return (
                            <CustomButtonLink
                                key={index}
                                link={button.link}
                                size="medium"
                                icon={button.icon}
                                text={button.text}
                            />
                        );
                    })}
                </div>
            </div>
        </Paper>
    );
};

export default Personal;
