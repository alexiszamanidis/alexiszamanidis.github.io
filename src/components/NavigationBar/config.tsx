import { AccountBox, Work } from "@material-ui/icons";

interface NavItem {
    label: string;
    icon: JSX.Element;
}

const navLinks: NavItem[] = [
    { label: "ABOUT ME", icon: <AccountBox /> },
    { label: "PORTFOLIO", icon: <Work /> },
];

export { navLinks };
