import theseRImg from "./these_r_project.png";
import carApiImg from "./car_api_project.png";
import gameListImg from "./game_list_project.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const projects = [
  {
    title: "These R",
    projectImg: theseRImg,
    shortDesc: [
      "A vanilla JavaScript project that fetches data from the MovieDB.",
      "Includes functionality such as search pagination and search.",
      "A two-page application",
    ],
    gitHubUrl: "https://github.com/sarunx93/JS-these_r",
    projectUrl: "https://these-r.netlify.app/",
    projectType: "vanillaJS",
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
  },
  {
    title: "Random Car API",
    projectImg: carApiImg,
    shortDesc: [
      "A back-end project using Node, Express, MongoDB and Mongoose.",
      "Provides a car API with query parameters to achieve more specific results.",
      "Data is generated using Mockaroo.",
    ],
    gitHubUrl: "https://github.com/sarunx93/cars-API",
    projectUrl: "https://random-cars-api.herokuapp.com/api/v1/cars",
    projectType: "Express",
    icons: [<FaNodeJs />, <SiExpress />, <SiMongodb />],
  },
  {
    title: "Game List",
    projectImg: gameListImg,
    shortDesc: [
      "A React project that displays game data derived from Freetogame.com.",
      "Heavy use of Context API, React Router Dom and LocalStorage",
      "Includes functionalities like search, filtering and favourite game selecting.",
    ],
    gitHubUrl: "https://github.com/sarunx93/React-gamelist",
    projectUrl: "https://mygamelist-react.netlify.app/",
    projectType: "React",
    icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />, <FaReact />],
  },
];

export default projects;
