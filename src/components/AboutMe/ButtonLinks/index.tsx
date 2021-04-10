import { FC } from "react";
import { buttons } from "./config";
import { Box, makeStyles } from "@material-ui/core";
import CustomButtonLink from "../../CustomButtonLink";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center",
    },
}));

const ButtonLinks: FC = () => {
    const classes = useStyles();

    return (
        <Box mb={3} className={classes.root}>
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
        </Box>
    );
};

export default ButtonLinks;
