import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { navLinks } from "./config.tsx";

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
            {navLinks.map((navLink) => (
                <BottomNavigationAction {...navLink} />
            ))}
        </BottomNavigation>
    );
}

export default NavigationBar;
