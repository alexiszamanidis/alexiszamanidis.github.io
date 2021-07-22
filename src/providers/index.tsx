import { FC } from "react";
import theme from "../theme";
import { ProviderPros } from "./types";
import GlobalStyles from "../globalStyles";
import { ThemeProvider } from "@material-ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Providers: FC<ProviderPros> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default Providers;
