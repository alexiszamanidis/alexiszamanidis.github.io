import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: "300px",
        margin: "30px",
    },
    grid: {
        marginTop: "10px",
        marginBottom: "10px",
    },
    icon: {
        textAlign: "center",
        marginTop: "10px",
    },
    searchFields: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // eslint-disable-next-line
        ["@media (min-width:600px)"]: {
            flexDirection: "row",
        },
    },
    search: {
        width: "100%",
        margin: "5px 5px 5px 0px",
        // eslint-disable-next-line
        ["@media (min-width:600px)"]: {
            width: "30%",
        },
    },
    select: {
        width: "100%",
        margin: "5px 5px 5px 0px",
        // eslint-disable-next-line
        ["@media (min-width:600px)"]: {
            width: "30%",
        },
    },
});

export { useStyles };
