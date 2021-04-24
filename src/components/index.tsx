import { FC } from "react";
import { tabItems } from "./config";
import Footer from "./Footer";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { QueryClient, QueryClientProvider } from "react-query";
import { Box, makeStyles } from "@material-ui/core";
import GlobalStyles from "../globalStyles";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/core";
import { useTabs } from "./useTabs";

const queryClient = new QueryClient();

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    main: {
        paddingBottom: theme.spacing(3),
    },
    footer: {
        marginTop: "auto",
    },
    tabs: {
        color: "white",
    },
}));

const App: FC = () => {
    const classes = useStyles();

    const { value, setValue, showTabContent } = useTabs();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <div data-test-id="app" className={classes.root}>
                    <div data-test-id="tabs" className={classes.main}>
                        <Box bgcolor="primary.main">
                            <Tabs
                                value={value}
                                onChange={(event, newValue) => setValue(newValue)}
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
                    </div>
                    <div data-test-id="footer" className={classes.footer}>
                        <Footer />
                    </div>
                </div>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
