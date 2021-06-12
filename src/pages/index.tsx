import { FC } from "react";
import MyTabs from "../components/Tabs";
import Layout from "../components/Layout";

const App: FC = () => {
    return (
        <Layout data-test-id="layout">
            <MyTabs data-test-id="tabs" />
        </Layout>
    );
};

export default App;
