import { useMemo } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        marginTop: "10px",
    },
});

export const useGitHubFaIconSpinner = (isLoading: boolean): JSX.Element => {
    const classes = useStyles();

    const gitHubFaIcon = useMemo(() => {
        return (
            <div className={`${classes.root} fa-3x`}>
                <i className={"fa fa-github" + (isLoading === true ? " fa-spin" : "")}></i>
            </div>
        );
    }, [isLoading, classes.root]);

    return gitHubFaIcon;
};
