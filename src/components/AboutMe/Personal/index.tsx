import { FC } from "react";
import { useQuery } from "react-query";
import Alert from "@material-ui/lab/Alert";
import Avatar from "@material-ui/core/Avatar";
import { calculateAge } from "../../../utilities";
import GitHub from "../../../services/GitHub/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    avatar: {
        margin: "auto",
        width: theme.spacing(25),
        height: theme.spacing(25),
        marginBottom: "15px",
    },
    personal: {
        textAlign: "center",
        marginBottom: "15px",
    },
    title: {
        color: theme.palette.text.primary,
    },
    item: {
        color: theme.palette.text.primary,
    },
    bio: {
        color: theme.palette.text.primary,
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
                <Box display="flex" justifyContent="center">
                    <CircularProgress />
                </Box>
            ) : isError ? (
                <Alert severity="error">Something happened</Alert>
            ) : (
                <div>
                    <Avatar
                        alt="Alexis Zamanidis"
                        src={data.avatar_url}
                        className={classes.avatar}
                    />
                    <div className={classes.personal}>
                        <div className={classes.item + " personal"}>
                            <Typography>
                                <i className={classes.title + " fa fa-user"}></i>
                                {data.name} <i className={classes.title + " fa fa-map-marker"}></i>
                                {data.location}{" "}
                                <i className={classes.title + " fa fa-birthday-cake"}></i>
                                {calculateAge("1998-01-20")}
                            </Typography>
                        </div>
                    </div>
                    <Box mb={1} fontWeight="fontWeightBold" className={classes.title}>
                        <Typography variant="h6">Summary</Typography>
                    </Box>
                    <Typography className={classes.bio}>{data.bio}</Typography>
                </div>
            )}
        </Box>
    );
};

export default Personal;
