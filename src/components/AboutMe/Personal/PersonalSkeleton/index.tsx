import React, { FC } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    skeletonItem: {
        marginRight: "2px",
    },
}));

const PersonalSkeleton: FC = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Skeleton className={classes.avatar} variant="circle" width={250} height={250} />
            <div className={classes.personal}>
                <div className={classes.item + " personal"}>
                    <Typography component={"span"}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Skeleton
                                className={classes.skeletonItem}
                                variant="circle"
                                width={20}
                                height={20}
                            />
                            <Skeleton className={classes.skeletonItem} width={"10%"} />
                            <Skeleton
                                className={classes.skeletonItem}
                                variant="circle"
                                width={20}
                                height={20}
                            />
                            <Skeleton className={classes.skeletonItem} width={"10%"} />
                            <Skeleton
                                className={classes.skeletonItem}
                                variant="circle"
                                width={20}
                                height={20}
                            />
                            <Skeleton className={classes.skeletonItem} width={"10%"} />
                        </Box>
                    </Typography>
                </div>
            </div>
            <Box mb={1} fontWeight="fontWeightBold" className={classes.title}>
                <Typography variant="h6">
                    <Skeleton className={classes.skeletonItem} width={"20%"} />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton width={"50%"} />
                </Typography>
            </Box>
            <Typography className={classes.bio}></Typography>
        </React.Fragment>
    );
};

export default PersonalSkeleton;
