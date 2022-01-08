import { ExperienceItem } from "./types";

const experience: ExperienceItem[] = [
    {
        from: "Jul 2021",
        to: "Present",
        jobTitle: "Software Engineer",
        company: "Upstream",
        location: "Athens, Greece",
        typeOfEmployee: "Remote Full-Time",
        description:
            "I have become a member of the Plan Migration team, which is a subgroup of GUI",
        details: [
            "<span class='light-bold'>Developing and Maintaining</span> the websites of TIM and OI, which are Brazil’s <span class='light-bold'>mobile network operators</span>",
            "<span class='light-bold'>Total Overhaul</span> of the TIM website",
            "Implementing <span class='light-bold'>reusable components</span> for the <span class='light-bold'>company’s core component library</span>",
        ],
        link: null,
    },
    {
        from: "Oct 2020",
        to: "Apr 2021",
        jobTitle: "Software Engineer, Intern",
        company: "ITML",
        location: "Athens, Greece",
        typeOfEmployee: "Remote Full-Time",
        description:
            "I was given to implement a RESTful Web App that will help Doctors in their daily work",
        details: [
            "<span class='light-bold'>Fully integrated System with IDIKA</span>, which is the <span class='light-bold'>Provider of e-Prescription in Greece</span>",
            "<span class='light-bold'>Automated</span> Visits, Referrals and Prescriptions for their Patients",
            "<span class='light-bold'>Calendar</span> to keep their appointments",
        ],
        link: null,
    },
];

export { experience };
