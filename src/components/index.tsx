import React, { useState } from "react";

import { tabItems } from "./config";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Footer from "./Footer";

function App() {
    const [value, setValue] = useState(0);

    const showTabContent = () => {
        if (value === 0) return <AboutMe />;
        else if (value === 1) return <Portfolio />;
        else return null;
    };

    return (
        <div>
            <div className="content">
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
            <Footer />
        </div>
    );
}

export default App;
