interface PassionateAboutItem {
    name: string;
}

const passionateAbout: PassionateAboutItem[] = [
    {
        name: "Full Stack Development mainly with React JS, Spring Boot and MySQL",
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
    icon: string;
    name: string;
    link: string;
}

const buttons: ButtonItem[] = [
    {
        icon: "fa fa-file",
        name: "CV",
        link: "https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG",
    },
    {
        icon: "fa fa-linkedin",
        name: "LinkedIn",
        link: "http://linkedin.com/in/alexiszamanidis",
    },
    {
        icon: "fa fa-github",
        name: "GitHub",
        link: "https://github.com/alexiszamanidis",
    },
];

export { passionateAbout, hobbies, contacts, buttons };
