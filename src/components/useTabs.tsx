import { useState, useMemo } from "react";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

const useTabs = () => {
    const [value, setValue] = useState<number>(0);

    const showTabContent: JSX.Element | null = useMemo(() => {
        if (value === 0) return <AboutMe />;
        else if (value === 1) return <Portfolio />;
        else return null;
    }, [value]);

    return { value, setValue, showTabContent };
};

export default useTabs;
