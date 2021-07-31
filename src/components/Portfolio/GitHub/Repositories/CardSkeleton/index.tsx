import React, { FC } from "react";
import { Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Grow from "@material-ui/core/Grow";
import { CardSkeletonProps } from "./types";
import { makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
    skeleton: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    },
    skeletonItem: {
        marginRight: "2px",
    },
});

const CardSkeleton: FC<CardSkeletonProps> = ({ timeout }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grow in={true} timeout={timeout}>
                <Card className={classes.skeleton}>
                    <CardContent>
                        <Typography component={"span"} color="textSecondary" gutterBottom>
                            <Skeleton width={"70%"} />
                        </Typography>
                        <Typography component={"span"}>
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                            <Skeleton />
                        </Typography>
                        <Typography component={"span"}>
                            <Box display="flex" alignItems="center">
                                <Skeleton className={classes.skeletonItem} width={"40%"} />
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
                    </CardContent>
                    <CardActions>
                        <Skeleton width={"70%"} height={40} style={{ marginLeft: "5px" }} />
                    </CardActions>
                </Card>
            </Grow>
        </React.Fragment>
    );
};

export default CardSkeleton;
