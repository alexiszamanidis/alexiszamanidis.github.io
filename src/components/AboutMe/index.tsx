import React, { FC } from "react";
import Skills from "./Skills";
import LeftPaper from "./LeftPaper";
import RightPaper from "./RightPaper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const AboutMe: FC = () => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={3} style={{ marginTop: "10px", marginBottom: "10px" }}>
                <LeftPaper />
                <RightPaper />
            </Grid>
            <Skills />
        </Container>
    );
};

export default AboutMe;
