import { FC, useState, useMemo } from "react";

import { tabItems } from "./config";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { QueryClient, QueryClientProvider } from "react-query";
import { makeStyles } from "@material-ui/core";
import GlobalStyles from "../globalStyles";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/core";
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
    tabs: {
        backgroundColor: "#3F51B5",
        color: "white",
    },
}));

const App: FC = () => {
    const classes = useStyles();

    const [value, setValue] = useState<number>(0);

    const showTabContent: JSX.Element | null = useMemo(() => {
        if (value === 0) return <AboutMe />;
        else if (value === 1) return <Portfolio />;
        else return null;
    }, [value]);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <div className={classes.root}>
                    <div className={classes.main}>
                        <Tabs
                            value={value}
                            onChange={(event, newValue) => setValue(newValue)}
                            variant="fullWidth"
                            className={classes.tabs}
                        >
                            {tabItems.map((tabItem, index) => {
                                return <Tab key={index} {...tabItem} />;
                            })}
                        </Tabs>
                        {showTabContent}
                    </div>
                    <div className={classes.footer}>
                        <Footer />
                    </div>
                </div>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
