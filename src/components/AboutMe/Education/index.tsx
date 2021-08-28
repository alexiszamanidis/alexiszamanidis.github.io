import { FC } from "react";
import { education } from "./config";
import LinkIcon from "@material-ui/icons/Link";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
    itemLinkIcon: {
        color: "black",
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

const Education: FC = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Box mb={5}>
            <Box mb={1} fontWeight="fontWeightBold" className={classes.title}>
                <Typography variant="h6">Education</Typography>
            </Box>
            {education.map((item, index) => {
                return (
                    <Box key={index} display="flex" flexDirection="column" mb={3}>
                        <Box
                            display="flex"
                            flexDirection={matches ? "row" : "column"}
                            justifyContent="space-between"
                        >
                            <Box display="flex" flexDirection={matches ? "row" : "column"}>
                                <Typography color="primary" className={classes.itemName}>
                                    {item.university}
                                </Typography>
                                <Box display="flex" flexDirection="row">
                                    <Typography className={classes.itemSlash}>{" | "}</Typography>
                                    <Typography className={classes.itemLocation}>
                                        {item.location}
                                    </Typography>
                                    <Link href={item.link} target="_blank" rel="noreferrer">
                                        <LinkIcon className={classes.itemLinkIcon} />
                                    </Link>
                                </Box>
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
