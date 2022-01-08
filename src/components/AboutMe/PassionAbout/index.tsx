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
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
    },
    bulletPoint: {
        margin: "0px 5px",
        fontSize: "15px",
    },
}));

const PassionateAbout: FC = () => {
    const classes = useStyles();

    return (
        <Box mb={5}>
            <Box mb={1} fontWeight="fontWeightBold" className={classes.title}>
                <Typography variant="h6">Passionate About</Typography>
            </Box>
            <List className={classes.list}>
                {passionateAbout.map((item, index) => {
                    return (
                        <ListItem key={index} className={classes.item}>
                            <div className={classes.bulletPoint}>○</div>
                            <Typography>{item.name}</Typography>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default PassionateAbout;
