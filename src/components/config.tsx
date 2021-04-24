import { TabItem } from "./types";
import { AccountBox, Work } from "@material-ui/icons";

const tabItems: TabItem[] = [
    { label: "ABOUT ME", icon: <AccountBox /> },
    { label: "PORTFOLIO", icon: <Work /> },
];

export { tabItems };
