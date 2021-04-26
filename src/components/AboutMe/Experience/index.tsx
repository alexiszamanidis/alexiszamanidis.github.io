import { FC } from "react";
import { experience } from "./config";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
    itemSlash: {
        display: "none",
        // eslint-disable-next-line
        ["@media (min-width:960px)"]: {
            display: "block",
            marginRight: "5px",
        },
    },
}));

const Experience: FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box mb={5}>
            <Box mb={1} fontWeight="fontWeightBold" className={classes.title}>
                <Typography variant="h6">Experience</Typography>
            </Box>
            {experience.map((item, index) => {
                return (
                    <Box key={index} display="flex" flexDirection="column">
                        <Box
                            display="flex"
                            flexDirection={matches ? "row" : "column"}
                            justifyContent="space-between"
                        >
                            <Box display="flex" flexDirection={matches ? "row" : "column"}>
                                <Typography
                                    color="primary"
                                    className={classes.item}
                                >{`${item.jobTitle} `}</Typography>
                                <Typography className={classes.itemSlash}>{" | "}</Typography>
                                <Typography>{`${item.company} - ${item.location} (${item.typeOfEmployee})`}</Typography>
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
