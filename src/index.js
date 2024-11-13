import "./styles.css";
import { ProjectManager } from "./projects";
import { renderDefaultProject, renderCustomProject } from "./domManager";
import homeIcon from "./img/home-icon.svg";

const projectManager = new ProjectManager();

const homeProject = projectManager.createProject("Home", "test", homeIcon);
renderCustomProject(homeProject);