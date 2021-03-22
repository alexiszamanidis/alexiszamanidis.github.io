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
        },
    },
});

function CustomButton({
    link,
    size,
    icon,
    text,
}: {
    link: string;
    size: "small" | "medium" | undefined;
    icon: any;
    text: string;
}) {
    const classes = useStyles();

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <Button
                size={size}
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={icon}
            >
                {text}
            </Button>
        </a>
    );
}

export default CustomButton;
