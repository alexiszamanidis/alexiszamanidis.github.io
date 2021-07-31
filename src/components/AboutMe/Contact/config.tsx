import { ContactItem } from "./types";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const contacts: ContactItem[] = [
    {
        icon: <PhoneIcon />,
        name: "+30 698-044-3908",
        link: "tel:+30698-044-3908",
    },
    {
        icon: <MailIcon />,
        name: "alexiszamanidis@outlook.com",
        link: "mailto:alexiszamanidis@outlook.com",
    },
];

export { contacts };
