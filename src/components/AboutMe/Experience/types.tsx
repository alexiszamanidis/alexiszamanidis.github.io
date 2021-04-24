export interface ExperienceItem {
    from: string;
    to: string;
    jobTitle: string;
    company: string;
    location: string;
    description: string;
    details: Array<string>;
    link: string | null;
}
