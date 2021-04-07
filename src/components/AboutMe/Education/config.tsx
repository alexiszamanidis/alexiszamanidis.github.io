interface EducationItem {
    university: string;
    duration: string;
    description: string;
    link: string;
}

const education: EducationItem[] = [
    {
        university: "National and Kappodistrian University of Athens",
        duration: "Oct 2016 - Present",
        description:
            "B.Sc. in Computer Science - Specializations: Software, Data & Knowledge Management",
        link: "https://www.di.uoa.gr/",
    },
];

export { education };
