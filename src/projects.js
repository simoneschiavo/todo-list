import { TaskManager } from "./tasks";
import defaultProjectIcon from "./img/default-project-icon.svg";
import homeIcon from "./img/home-icon.svg";
import todayIcon from "./img/today-icon.svg";
import somedayIcon from "./img/someday-icon.svg";

export class Project {
    constructor(name, description = "", icon = defaultProjectIcon) {
        this.name = name;
        this.description = description;
        this.icon = icon;
        this.taskManager = new TaskManager();

    }

    getAllTasks() {
        return this.taskManager.getAllTasks();
    }

    getTask(index) {
        return this.taskManager.getTask(index);
    }

    createTask(title, description, dueDate, priority) {
        const task = this.taskManager.createTask(title, description, dueDate, priority);
        if (this.name !== "Home") {
            this.addTaskToHomeProject(title, description, dueDate, priority);
        }
        return task;
    }

    addTaskToHomeProject(title, description, dueDate, priority) {
        const task = homeProject.createTask(title, description, dueDate, priority);
        return task
    }

    updateTask(index, updatedData) {
        return this.taskManager.updateTask(index, updatedData);
    }

    deleteTask(index) {
        return this.taskManager.deleteTask(index);
    }
}

export class ProjectManager {
    constructor() {
        this.projects = [];
    }

    createProject(name, description = "", icon = defaultProjectIcon) {
        const project = new Project(name, description, icon);
        this.projects.push(project);
        return project;
    } 

    getProject(index) {
        return this.projects[index];
    }

    getAllProjects() {
        return this.projects;
    }

    updateProject(index, updatedData) {
        const project = this.projects[index];
        if (project) {
            project.name = updatedData.name || project.name;
            project.description = updatedData.description || project.description;
        }
    }

    deleteProject(index) {
        if (index >= 0 && index < this.projects.length) {
            this.projects.splice(index, 1);
            return true;
        }
        return false;
    }
}

export const projectManager = new ProjectManager();
export const homeProject = projectManager.createProject("Home", "", homeIcon);
export const todayProject = projectManager.createProject("Today", "", todayIcon);
export const somedayProject = projectManager.createProject("Someday", "", somedayIcon);