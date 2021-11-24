import { FC } from "react";
import { contacts } from "./config";
import { Box, Link, List, ListItem, makeStyles, Typography } from "@material-ui/core";

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
    link: {
        color: theme.palette.text.primary,
    },
    icon: {
        marginRight: "3px",
    },
}));

const Contact: FC = () => {
    const classes = useStyles();

    return (
        <Box mb={5}>
            <Box mb={1} fontWeight="fontWeightBold" className={classes.title}>
                <Typography variant="h6">Contact</Typography>
            </Box>
            <List className={classes.list}>
                {contacts.map((item, index) => {
                    return (
                        <ListItem key={index} className={classes.item}>
                            <Link
                                href={item.link}
                                className={classes.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Typography component={"span"}>
                                    <Box display="flex">
                                        <div className={classes.icon}>{item.icon}</div>
                                        {item.name}
                                    </Box>
                                </Typography>
                            </Link>
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );
};

export default Contact;
