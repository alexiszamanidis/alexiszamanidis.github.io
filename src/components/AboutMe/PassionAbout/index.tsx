import { FC } from "react";
import { passionateAbout } from "./config";
import { Box, List, ListItem, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.text.primary,
    },
    list: {
        padding: "0px 0px 0px 0px",
    },
    item: {
        padding: "0px 0px 0px 0px",
        color: theme.palette.text.primary,
    },
}));

const PassionateAbout: FC = () => {
    const classes = useStyles();

    return (
        <Box mb={3}>
            <Box fontWeight="fontWeightBold" className={classes.title}>
                <Typography variant="h6">Passionate About</Typography>
            </Box>
            <List className={classes.list}>
                {passionateAbout.map((item, index) => {
                    return (
                        <ListItem key={index} className={classes.item}>
                            <Typography>{`${index + 1}. ${item.name}`}</Typography>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default PassionateAbout;
