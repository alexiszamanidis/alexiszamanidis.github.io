import ReceiptIcon from "@material-ui/icons/Receipt";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

interface PassionateAboutItem {
    name: string;
}

const passionateAbout: PassionateAboutItem[] = [
    {
        name: "Full Stack Development mainly with React.js, Spring Boot and MySQL",
    },
    {
        name: "Machine Learning - Data Mining",
    },
    {
        name: "Parallel Programming",
    },
];

interface HobbyItem {
    name: string;
}

const hobbies: HobbyItem[] = [
    {
        name: "Playing Football and Basketball",
    },
    {
        name: "Calisthenics Workout",
    },
];

interface ContactItem {
    icon: string;
    name: string;
    link: string;
}

const contacts: ContactItem[] = [
    {
        icon: "fa fa-phone",
        name: "+30 698-044-3908",
        link: "tel:+30698-044-3908",
    },
    {
        icon: "fa fa-envelope",
        name: "alexiszamanidis@outlook.com",
        link: "mailto:alexiszamanidis@outlook.com",
    },
];

interface ButtonItem {
    text: string;
    icon: any;
    link: string;
}

const buttons: ButtonItem[] = [
    {
        text: "CV",
        icon: <ReceiptIcon />,
        link: "https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG",
    },
    {
        text: "LinkedIn",
        icon: <LinkedInIcon />,
        link: "http://linkedin.com/in/alexiszamanidis",
    },
    {
        text: "GitHub",
        icon: <GitHubIcon />,
        link: "https://github.com/alexiszamanidis",
    },
];

export { passionateAbout, hobbies, contacts, buttons };
