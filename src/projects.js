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
        this.tasks = [];

    }

    getAllTasks() {
        return this.tasks;
    }

    getTask(index) {
        return this.tasks[index];
    }

    createTask(title, description, dueDate, priority) {
        const task = { id: Date.now().toString(), title, description, dueDate, priority };
        this.tasks.push(task);
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
        const task = this.tasks[index];
        if (task) {
            task.title = updatedData.title || task.title;
            task.description = updatedData.description || task.description;
            task.dueDate = updatedData.dueDate || task.dueDate;
            task.priority = updatedData.priority || task.priority;

            projectManager.getAllProjects().forEach((project) => {
              project.tasks.forEach((t) => {
                if (t.id === task.id) {
                  t.title = updatedData.title || t.title;
                  t.description = updatedData.description || t.description;
                  t.dueDate = updatedData.dueDate || t.dueDate;
                  t.priority = updatedData.priority || t.priority;
                }
              });
            });
        }
        return task;
    }
    
    deleteTask(identifier) {
        let index;
        if (typeof identifier === "number") {
            index = identifier;
        } else if (typeof identifier === "string") {
            index = this.tasks.findIndex(task => task.title === identifier);
        }

        if (index >= 0 && index < this.tasks.length) {
            const taskToDelete = this.tasks[index];
            this.tasks.splice(index, 1);
            projectManager.getAllProjects().forEach(project => {
                if (project.name !== this.name) {
                  project.deleteTask(taskToDelete.title);
                }
            });
            return true;
        }
        return false;
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
export const homeProject = projectManager.createProject("Home", "All your tasks are here.", homeIcon);
export const todayProject = projectManager.createProject("Today", "", todayIcon);
export const somedayProject = projectManager.createProject("Someday", "", somedayIcon);