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

export { contacts };
