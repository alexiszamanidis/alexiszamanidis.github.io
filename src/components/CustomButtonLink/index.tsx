import { FC } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { CustomButtonLinkProps } from "./types";

const useStyles = makeStyles({
    button: {
        margin: "5px 5px 5px 5px",
    },
});

const CustomButtonLink: FC<CustomButtonLinkProps> = ({ link, size, icon, text }) => {
    const classes = useStyles();

    return (
        <a data-test-id="custom-button-link-a" href={link} target="_blank" rel="noreferrer">
            <Button
                data-test-id="custom-button-link-button"
                color="primary"
                variant="contained"
                size={size}
                startIcon={icon}
                className={classes.button}
            >
                {text}
            </Button>
        </a>
    );
};

export default CustomButtonLink;
