import { FC } from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

const AboutMe: FC = () => {
    return (
        <Box mt={3}>
            <Container maxWidth="md">
                <Personal />
                <Experience />
            </Container>
        </Box>
    );
};

export default AboutMe;
