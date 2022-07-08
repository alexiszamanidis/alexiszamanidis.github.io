import { ExperienceItem } from "./types";

const experience: ExperienceItem[] = [
    {
        from: "Jul 2021",
        to: "Jul 2022",
        jobTitle: "Software Engineer",
        company: "Upstream",
        location: "Athens, Greece",
        typeOfEmployee: "Remote Full-Time",
        description:
            "I was responsible for developing and maintaining the Plan Migration, Grow Measure and Track services",
        details: [
            "<span class='light-bold'>Investigated the architectural design</span> of Plan Migration <span class='light-bold'>using Lerna, yarn workspaces and Monorepos</span>, so that it can be scalable and maintainable as the number of MNOs increases",
            "Participated in the total <span class='light-bold'>overhaul of the TIM website</span>",
            "<span class='light-bold'>Set up the new Grow Track service</span>",
            "<span class='light-bold'>Implemented reusable components</span> for the <span class='light-bold'>company’s core component library</span>",
            "<span class='light-bold'>Paired programming with 2 interns</span> and taught them the apps-domain, Git workflow, use of Memcached and Docker",
            "<span class='light-bold'>Presented application features to colleagues and recorded them for the future team members</span>",
        ],
        link: "https://www.upstreamsystems.com/",
    },
    {
        from: "Oct 2020",
        to: "Apr 2021",
        jobTitle: "Software Engineer",
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
        link: "https://itml.gr/",
    },
];

export { experience };
