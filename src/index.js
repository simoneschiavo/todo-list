import "./styles.css";
import { projectManager, homeProject, todayProject, somedayProject } from "./projects";
import { renderDefaultProject, renderCustomProject } from "./domManager";
import defaultProjectIcon from "./img/default-project-icon.svg";

// Create the default projects
renderCustomProject(homeProject);
renderCustomProject(todayProject);
renderCustomProject(somedayProject);

const testProject = projectManager.createProject("Test - Start here", "Here you will find tasks to get familiar with the app. Mark them complete as your progress on your journey with ToDoPot.", defaultProjectIcon);
testProject.createTask(
  "Create your first task",
  "Test description",
  "25/12/2024",
  "High"
);

renderDefaultProject(testProject);