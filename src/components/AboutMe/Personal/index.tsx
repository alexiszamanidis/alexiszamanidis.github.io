import React, { FC } from "react";
import { useQuery } from "react-query";
import Alert from "@material-ui/lab/Alert";
import Avatar from "@material-ui/core/Avatar";
import { calculateAge } from "../../../utilities";
import PersonalSkeleton from "./PersonalSkeleton";
import { Box, Typography } from "@material-ui/core";
import GitHub from "../../../services/GitHub/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CakeIcon from "@material-ui/icons/Cake";
import { summary } from "./config";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: "auto",
        width: theme.spacing(25),
        height: theme.spacing(25),
        marginBottom: "15px",
    },
    title: {
        color: theme.palette.text.primary,
    },
    bio: {
        color: theme.palette.text.primary,
    },
    personal: {
        marginBottom: "30px",
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // eslint-disable-next-line
        ["@media (min-width:450px)"]: {
            flexDirection: "row",
        },
    },
    info: {
        display: "flex",
        flexDirection: "row",
    },
}));

const Personal: FC = () => {
    const classes = useStyles();

    const { isLoading, isError, data } = useQuery(
        "gitHubUserData",
        () => GitHub.getUserData("alexiszamanidis").then(({ data }) => data),
        { refetchOnMount: false, cacheTime: Infinity }
    );

    return (
        <Box mb={5}>
            {isLoading ? (
                <PersonalSkeleton />
            ) : isError ? (
                <Alert severity="error">Something happened</Alert>
            ) : (
                <React.Fragment>
                    <Avatar
                        alt="Alexis Zamanidis"
                        src={data.avatar_url}
                        className={classes.avatar}
                    />
                    <div className={classes.personal}>
                        <div className={classes.info}>
                            <PersonIcon />
                            <Typography>{data.name}</Typography>
                        </div>
                        <div className={classes.info}>
                            <LocationOnIcon />
                            <Typography>{data.location}</Typography>
                        </div>
                        <div className={classes.info}>
                            <CakeIcon />
                            <Typography>{calculateAge("1998-01-20")}</Typography>
                        </div>
                    </div>
                    <Box mb={1} fontWeight="fontWeightBold" className={classes.title}>
                        <Typography variant="h6">Summary</Typography>
                    </Box>
                    <Typography className={classes.bio}>{summary}</Typography>
                </React.Fragment>
            )}
        </Box>
    );
};

export default Personal;
