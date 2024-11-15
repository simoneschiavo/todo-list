import "./styles.css";
import { ProjectManager } from "./projects";
import { renderDefaultProject, renderCustomProject } from "./domManager";
import homeIcon from "./img/home-icon.svg";
import todayIcon from "./img/today-icon.svg";
import somedayIcon from "./img/someday-icon.svg";

const projectManager = new ProjectManager();

// Create the default projects
const homeProject = projectManager.createProject("Home", "", homeIcon);
homeProject.taskManager.createTask("Test", "Test description", "25/12/2024", "High");

const todayProject = projectManager.createProject("Today", "", todayIcon);
const somedayProject = projectManager.createProject("Someday", "", somedayIcon);

renderCustomProject(homeProject);
renderCustomProject(todayProject);
renderCustomProject(somedayProject);

const testProject = projectManager.createProject("Test - Start here");

renderDefaultProject(testProject);