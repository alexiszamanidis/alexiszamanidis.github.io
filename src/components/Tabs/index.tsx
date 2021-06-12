import React, { FC } from "react";
import { tabItems } from "./config";
import { useTabs } from "./useTabs";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    tabs: {
        color: "white",
    },
});

const MyTabs: FC = () => {
    const classes = useStyles();

    const { value, handleTabs, showTabContent } = useTabs();

    return (
        <React.Fragment>
            <Box data-test-id="tabs" bgcolor="primary.main">
                <Tabs
                    value={value}
                    onChange={handleTabs}
                    variant="fullWidth"
                    className={classes.tabs}
                    TabIndicatorProps={{
                        style: {
                            height: "5px",
                        },
                    }}
                >
                    {tabItems.map((tabItem, index) => {
                        return <Tab key={index} {...tabItem} />;
                    })}
                </Tabs>
            </Box>
            {showTabContent}
        </React.Fragment>
    );
};

export default MyTabs;
