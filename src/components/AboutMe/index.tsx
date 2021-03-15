import { FC } from "react";
import LeftPaper from "./LeftPaper";
import RightPaper from "./RightPaper";
import Experience from "./Experience";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

const AboutMe: FC = () => {
    return (
        <Box mt={3}>
            <Container>
                <Grid container spacing={3}>
                    <LeftPaper />
                    <RightPaper />
                </Grid>
                <Experience />
            </Container>
        </Box>
    );
};

export default AboutMe;
