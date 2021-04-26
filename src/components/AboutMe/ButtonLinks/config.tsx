import { ButtonItem } from "./types";
import GitHubIcon from "@material-ui/icons/GitHub";
import ReceiptIcon from "@material-ui/icons/Receipt";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";

const buttons: ButtonItem[] = [
    {
        text: "CV",
        icon: <ReceiptIcon />,
        link: "https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG",
    },
    // {
    //     text: "LinkedIn",
    //     icon: <LinkedInIcon />,
    //     link: "http://linkedin.com/in/alexiszamanidis",
    // },
    {
        text: "GitHub",
        icon: <GitHubIcon />,
        link: "https://github.com/alexiszamanidis",
    },
];

export { buttons };
