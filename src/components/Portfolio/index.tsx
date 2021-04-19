import { FC } from "react";
import GitHub from "./GitHub";
import Container from "@material-ui/core/Container";

const Portfolio: FC = () => {
    return (
        <Container data-test-id="card-portfolio">
            <GitHub data-test-id="github" />
        </Container>
    );
};

export default Portfolio;
