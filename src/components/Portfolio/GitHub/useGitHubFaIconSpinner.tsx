import { useMemo } from "react";
import { makeStyles } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "10px",
    },
    icon: {
        fontSize: "50px",
    },
});

export const useGitHubFaIconSpinner = (isLoading: boolean): JSX.Element => {
    const classes = useStyles();

    const gitHubFaIcon = useMemo(() => {
        return (
            <div className={classes.root}>
                <GitHubIcon className={`${classes.icon} ${isLoading ? "spin" : ""}`} />
            </div>
        );
    }, [isLoading, classes]);

    return gitHubFaIcon;
};
