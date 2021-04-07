import { FC } from "react";
import { contacts, buttons } from "./config";
import { Box, Link, List, ListItem, makeStyles, Typography } from "@material-ui/core";
import CustomButtonLink from "../../CustomButtonLink";

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
    buttons: {
        textAlign: "center",
    },
}));

const Contact: FC = () => {
    const classes = useStyles();

    return (
        <Box>
            <Box fontWeight="fontWeightBold" className={classes.title}>
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
                                <div className="contact">
                                    <i className={classes.title + " " + item.icon}></i>
                                    {item.name}
                                </div>
                            </Link>
                        </ListItem>
                    );
                })}
            </List>
            <Box mt={2} className={classes.buttons}>
                <div className={classes.item}>
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
                </div>
            </Box>
        </Box>
    );
};

export default Contact;
