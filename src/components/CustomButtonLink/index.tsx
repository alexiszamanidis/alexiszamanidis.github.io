import { FC } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        margin: "5px 5px 5px 5px",
        color: "white",
        outline: "0px solid white",
        transition: "outline-offset 250ms ease",
        borderRadius: "0",
        "&:hover, &:focus": {
            outline: "2px solid white",
            outlineOffset: "-5px",
            boxShadow: "2px 2px gray",
        },
    },
});

interface CustomButtonLinkProps {
    link: string;
    size: "small" | "medium" | undefined;
    icon: JSX.Element;
    text: string;
}

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
