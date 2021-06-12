import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import { useState, useMemo } from "react";

export const useTabs = () => {
    const [value, setValue] = useState<number>(0);

    const showTabContent: JSX.Element | null = useMemo(() => {
        if (value === 0) return <AboutMe />;
        else if (value === 1) return <Portfolio />;
        else return null;
    }, [value]);

    const handleTabs = (event: any, newValue: number) => {
        setValue(newValue);
    };

    return { value, setValue, handleTabs, showTabContent };
};
