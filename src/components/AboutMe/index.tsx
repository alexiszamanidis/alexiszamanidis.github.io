import { FC } from "react";
import Contact from "./Contact";
import Hobbies from "./Hobbies";
import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import ButtonLinks from "./ButtonLinks";
import PassionateAbout from "./PassionAbout";
import Container from "@material-ui/core/Container";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "25px",
    },
    paper: {
        padding: theme.spacing(3),
        color: theme.palette.text.secondary,
        height: "100%",
    },
}));

const AboutMe: FC = () => {
    const classes = useStyles();

    return (
        <Container data-test-id="about-me" maxWidth="md" className={classes.root}>
            <Paper className={classes.paper}>
                <Personal data-test-id="personal" />
                <Education data-test-id="education" />
                <Experience data-test-id="experience" />
                <PassionateAbout data-test-id="passionate-about" />
                <Hobbies data-test-id="hobbies" />
                <Contact data-test-id="contact" />
                <ButtonLinks data-test-id="button-links" />
            </Paper>
        </Container>
    );
};

export default AboutMe;
