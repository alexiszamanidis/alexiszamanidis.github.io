interface AboutMeInterface {
    fullName: string;
    location: string;
    dateOfBirth: string;
    summary: string;
    avatar: string;
    cv: string;
}

const aboutMe: AboutMeInterface = {
    fullName: "Alexis Zamanidis",
    location: "Athens, Greece",
    dateOfBirth: "1998-01-20",
    summary:
        "I am currently an undergraduate student at National and Kapodistrian University of Athens in Department of Informatics and Telecommunications.",
    avatar: "https://drive.google.com/uc?id=1TjlxLKkrl6fVg6GZLtdaJlIFb2Ojspv7",
    cv: "https://drive.google.com/uc?id=1gqb_C5kko846r6uYC7grd1VRfaSxjwuG",
};

interface PassionateAboutItem {
    name: string;
}

const passionateAbout: PassionateAboutItem[] = [
    {
        name: "Full Stack Development mainly with React JS, Spring Boot and MySQL",
    },
    {
        name: "Machine Learning - Data Mining",
    },
    {
        name: "Parallel Programming",
    },
];

interface HobbyItem {
    name: string;
}

const hobbies: HobbyItem[] = [
    {
        name: "Playing Football and Basketball",
    },
    {
        name: "Calisthenics Workout",
    },
];

export { aboutMe, passionateAbout, hobbies };
