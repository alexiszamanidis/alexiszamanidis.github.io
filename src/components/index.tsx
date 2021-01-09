import React, { FC, useState } from "react";

import { tabItems } from "./config";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import { makeStyles } from "@material-ui/core";

// create a client for react-query
const queryClient = new QueryClient();

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        marginBottom: theme.spacing(3),
    },
    footer: {
        marginTop: "auto",
    },
}));

const App: FC = () => {
    const classes = useStyles();

    const [value, setValue] = useState<number>(0);

    const showTabContent = () => {
        if (value === 0) return <AboutMe />;
        else if (value === 1) return <Portfolio />;
        else return null;
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className={classes.root}>
                <div className={classes.main}>
                    <Tabs
                        value={value}
                        onChange={(event, newValue) => setValue(newValue)}
                        variant="fullWidth"
                        color="primary"
                        style={{ backgroundColor: "#f5f5f5" }}
                    >
                        {tabItems.map((tabItem, index) => {
                            return <Tab key={index} {...tabItem} />;
                        })}
                    </Tabs>
                    {showTabContent()}
                </div>
                <div className={classes.footer}>
                    <Footer />
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default App;
