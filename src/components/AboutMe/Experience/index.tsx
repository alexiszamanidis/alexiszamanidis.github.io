import { FC } from "react";
import { experience } from "./config";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    title: {
        color: theme.palette.text.primary,
    },
    item: {
        marginRight: "5px",
    },
    itemDescription: {
        color: theme.palette.text.primary,
    },
    itemDuration: {
        color: theme.palette.text.primary,
    },
}));

const Experience: FC = () => {
    const classes = useStyles();

    return (
        <Box mb={5}>
            <Box mb={1} fontWeight="fontWeightBold" className={classes.title}>
                <Typography variant="h6">Experience</Typography>
            </Box>
            {experience.map((item, index) => {
                return (
                    <Box key={index} display="flex" flexDirection="column">
                        <Box display="flex" flexDirection="row" justifyContent="space-between">
                            <Box display="flex" flexDirection="row">
                                <Typography
                                    color="primary"
                                    className={classes.item}
                                >{`${item.jobTitle} `}</Typography>
                                <Typography>{` | ${item.company} - ${item.location}`}</Typography>
                            </Box>
                            <Typography className={classes.itemDuration}>
                                {item.from} - {item.to}
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

export default Experience;
