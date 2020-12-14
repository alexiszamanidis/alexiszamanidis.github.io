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

// eslint-disable-next-line
interface Skill {
    name: string;
    link: string;
}

const skills = {
    languages: [
        { name: "C", link: "https://github.com/alexiszamanidis/conway_game_of_life" },
        { name: "C++", link: "https://github.com/alexiszamanidis/sql_query_executor" },
        { name: "Java", link: "https://gitlab.com/alexiszamanidis/spring_boot" },
    ],
    dataScience: [
        { name: "Python", link: "https://github.com/alexiszamanidis/airbnb_data_analysis" },
    ],
    frontend: [
        { name: "JavaScript", link: "#/" },
        { name: "HTML", link: "#/" },
        { name: "CSS", link: "#/" },
        { name: "React JS", link: "https://github.com/alexiszamanidis/alexiszamanidis.github.io" },
    ],
    backend: [{ name: "Spring Boot", link: "https://gitlab.com/alexiszamanidis/spring_boot" }],
    databases: [{ name: "MySQL", link: "" }],
    ide: [
        { name: "VS Code", link: "#/" },
        { name: "Eclipse", link: "#/" },
    ],
    otherTools: [
        { name: "Git", link: "https://github.com/alexiszamanidis" },
        { name: "Bash", link: "https://github.com/alexiszamanidis/.ubuntu_bootstrap" },
        { name: "Docker", link: "#/" },
        { name: "Lucidchart", link: "#/" },
        { name: "Balsamiq", link: "#/" },
    ],
};

const skillsToRows = () => {
    let skillRows = [];
    let defaultSkill = { name: "", link: "#/" };
    const { languages, dataScience, frontend, backend, databases, ide, otherTools } = skills;
    for (let i = 0; ; i++) {
        if (
            !(
                languages.length > i ||
                dataScience.length > i ||
                frontend.length > i ||
                backend.length > i ||
                databases.length > i ||
                ide.length > i ||
                otherTools.length > i
            )
        ) {
            return skillRows;
        }
        let newSkillObject = {
            language: languages.length > i ? languages[i] : defaultSkill,
            dataScience: dataScience.length > i ? dataScience[i] : defaultSkill,
            frontend: frontend.length > i ? frontend[i] : defaultSkill,
            backend: backend.length > i ? backend[i] : defaultSkill,
            databases: databases.length > i ? databases[i] : defaultSkill,
            ide: ide.length > i ? ide[i] : defaultSkill,
            otherTools: otherTools.length > i ? otherTools[i] : defaultSkill,
        };
        skillRows.push(newSkillObject);
    }
};

const skillRows = skillsToRows();

export { mainColumns, skillFields, skillRows };
