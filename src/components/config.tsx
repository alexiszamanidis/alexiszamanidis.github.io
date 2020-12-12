import { AccountBox, Work } from "@material-ui/icons";

interface TabItem {
    label: string;
    icon: JSX.Element;
}

const tabItems: TabItem[] = [
    { label: "ABOUT ME", icon: <AccountBox /> },
    { label: "PORTFOLIO", icon: <Work /> },
];

export { tabItems };
