interface MainColumn {
    name: string;
}

const mainColumns: MainColumn[] = [
    { name: "Languages" },
    { name: "Data Science" },
    { name: "Frontend" },
    { name: "Backend" },
    { name: "Databases" },
    { name: "IDE" },
    { name: "Other Tools" },
];

interface MainSkillFields {
    name: string;
}

const skillFields: MainSkillFields[] = [
    { name: "language" },
    { name: "dataScience" },
    { name: "frontend" },
    { name: "backend" },
    { name: "databases" },
    { name: "ide" },
    { name: "otherTools" },
];

interface SkillRow {
    language: string;
    dataScience: string;
    frontend: string;
    backend: string;
    databases: string;
    ide: string;
    otherTools: string;
}

const skills: SkillRow[] = [
    {
        language: "C",
        dataScience: "Python",
        frontend: "JavaScript",
        backend: "Spring Boot",
        databases: "MySQL",
        ide: "VS Code",
        otherTools: "Git",
    },
    {
        language: "C++",
        dataScience: "",
        frontend: "HTML",
        backend: "PHP",
        databases: "",
        ide: "Eclipse",
        otherTools: "Docker",
    },
    {
        language: "Java",
        dataScience: "",
        frontend: "CSS",
        backend: "",
        databases: "",
        ide: "",
        otherTools: "Lucidchart",
    },
    {
        language: "",
        dataScience: "",
        frontend: "React JS",
        backend: "",
        databases: "",
        ide: "",
        otherTools: "Balsamiq",
    },
];

export { mainColumns, skillFields, skills };
