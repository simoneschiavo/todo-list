import "./styles.css";
import { ProjectManager } from "./projects";
import { renderDefaultProject, renderCustomProject } from "./domManager";
import homeIcon from "./img/home-icon.svg";
import todayIcon from "./img/today-icon.svg";
import somedayIcon from "./img/someday-icon.svg";
import defaultProjectIcon from "./img/default-project-icon.svg";

const projectManager = new ProjectManager();

// Create the default projects
const homeProject = projectManager.createProject("Home", "", homeIcon);

const todayProject = projectManager.createProject("Today", "", todayIcon);
const somedayProject = projectManager.createProject("Someday", "", somedayIcon);

renderCustomProject(homeProject);
renderCustomProject(todayProject);
renderCustomProject(somedayProject);

const testProject = projectManager.createProject("Test - Start here", "Here you will find tasks to get familiar with the app. Mark them complete as your progress on your journey with ToDoPot.", defaultProjectIcon);
testProject.taskManager.createTask(
  "Test",
  "Test description",
  "25/12/2024",
  "High"
);

renderDefaultProject(testProject);