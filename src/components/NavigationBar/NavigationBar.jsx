import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { AccountBox, Work } from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        width: "100%",
        backgroundColor: "#f5f5f5",
    },
});

function NavigationBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="ABOUT ME" icon={<AccountBox />} />
            <BottomNavigationAction label="PORTFOLIO" icon={<Work />} />
        </BottomNavigation>
    );
}

export default NavigationBar;
