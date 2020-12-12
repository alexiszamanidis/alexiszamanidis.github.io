import React, { useState } from "react";
import AboutMe from "./AboutMe";
import { tabItems } from "./config";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Portfolio from "./Portfolio/Portfolio";

function App() {
    const [value, setValue] = useState(0);

    const showTabContent = () => {
        if (value === 0) return <AboutMe />;
        else if (value === 1) return <Portfolio />;
        else return null;
    };

    return (
        <div>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    variant="fullWidth"
                >
                    {tabItems.map((tabItem, index) => {
                        return <Tab key={index} {...tabItem} />;
                    })}
                </Tabs>
            </AppBar>
            {showTabContent()}
        </div>
    );
}

export default App;
