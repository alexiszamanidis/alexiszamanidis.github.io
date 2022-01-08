import { HobbyItem } from "./types";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const hobbies: HobbyItem[] = [
    {
        name: "Playing Football and Basketball",
        icon: <SportsBasketballIcon />,
    },
    {
        name: "Calisthenics Workout",
        icon: <FitnessCenterIcon />,
    },
];

export { hobbies };
