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
            "<span class='light-bold'>Stack</span>: Next.js, Node.js, PostgreSQL",
            "<span class='light-bold'>Maintenance</span> of the websites of TIM and OI, which are Brazil’s <span class='light-bold'>mobile network operators</span>",
            "<span class='light-bold'>Total Overhaul</span> of the TIM website",
            "Participating in the <span class='light-bold'>creation of reusable components</span> for the <span class='light-bold'>company’s core component library</span>",
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
            "I was given to implement a solo project from scratch. The project that I built was a subscription RESTful Web App for " +
            "Doctors that will help them to automate their Visits, Referrals and Prescriptions for their Patients.",
        details: [
            "<span class='light-bold'>Stack</span>: React.js, Spring Boot, MySQL",
            "<span class='light-bold'>Fully integrated System with IDIKA</span>, which is the <span class='light-bold'>Provider of e-Prescription in Greece</span>",
        ],
        link: null,
    },
];

export { experience };
