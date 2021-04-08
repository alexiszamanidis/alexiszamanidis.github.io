import { FC } from "react";
import { education } from "./config";
import LinkIcon from "@material-ui/icons/Link";
import { Box, Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.text.primary,
    },
    item: {
        marginRight: "5px",
    },
    itemName: {
        marginRight: "5px",
    },
    itemDescription: {
        color: theme.palette.text.primary,
    },
    itemLocation: {
        marginRight: "5px",
    },
    itemDuration: {
        color: theme.palette.text.primary,
    },
}));

const Education: FC = () => {
    const classes = useStyles();

    return (
        <Box mb={3}>
            <Box fontWeight="fontWeightBold" className={classes.title}>
                <Typography variant="h6">Education</Typography>
            </Box>
            {education.map((item, index) => {
                return (
                    <Box key={index} display="flex" flexDirection="column">
                        <Box display="flex" flexDirection="row" justifyContent="space-between">
                            <Box display="flex" flexDirection="row">
                                <Typography color="primary" className={classes.itemName}>
                                    {item.university}
                                </Typography>
                                <Typography
                                    className={classes.itemLocation}
                                >{` | ${item.location}`}</Typography>
                                <Link href={item.link} target="_blank" rel="noreferrer">
                                    <LinkIcon />
                                </Link>
                            </Box>
                            <Typography className={classes.itemDuration}>
                                {item.duration}
                            </Typography>
                        </Box>
                        <Typography className={classes.itemDescription}>
                            {item.description}
                        </Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default Education;
