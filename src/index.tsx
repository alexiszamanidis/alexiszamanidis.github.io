import React from "react";
import ReactDOM from "react-dom";
import App from "./pages";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import GlobalStyles from "./globalStyles";
const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </QueryClientProvider>,
    document.getElementById("root")
);
