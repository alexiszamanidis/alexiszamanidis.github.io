interface EducationItem {
    university: string;
    duration: string;
    description: string;
    location: string;
    link: string;
}

const education: EducationItem[] = [
    {
        university: "National & Kapodistrian University of Athens",
        duration: "Oct 2016 - Present",
        description:
            "B.Sc. in Computer Science - Specializations: Software, Data & Knowledge Management",
        location: "Athens, Greece",
        link: "https://www.di.uoa.gr/",
    },
];

export { education };
