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
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.paper}>
                <Personal />
                <Education />
                <Experience />
                <PassionateAbout />
                <Hobbies />
                <Contact />
                <ButtonLinks />
            </Paper>
        </Container>
    );
};

export default AboutMe;
