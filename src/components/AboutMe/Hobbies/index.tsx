import { FC } from "react";
import { hobbies } from "./config";
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

const Hobbies: FC = () => {
    const classes = useStyles();

    return (
        <Box mb={5}>
            <Box mb={1} fontWeight="fontWeightBold" className={classes.title}>
                <Typography variant="h6">Hobbies</Typography>
            </Box>
            <List className={classes.list}>
                {hobbies.map((item, index) => {
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

export default Hobbies;
