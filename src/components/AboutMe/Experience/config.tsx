interface ExperienceItem {
    from: string;
    to: string;
    jobTitle: string;
    company: string;
    location: string;
    description: string;
    details: Array<string>;
    link: string | null;
}

const experience: ExperienceItem[] = [
    {
        from: "Oct 2020",
        to: "Present (Ends in Mar 2021)",
        jobTitle: "Full Stack Developer",
        company: "ITML",
        location: "Athens, Greece",
        description:
            "I am building a subscription Web App for Doctors that will help them to automate their Visits, Referrals and Prescriptions for their Patients.",
        details: ["Techs & Languages: React JS, Spring Boot, MySQL", "Security: JSON Web Tokens"],
        link: null,
    },
];

export { experience };
