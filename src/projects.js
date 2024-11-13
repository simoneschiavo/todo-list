import { TaskManager } from "./tasks";

export class Project {
    constructor(name, description) {
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
        return this.taskManager.createTask(title, description, dueDate, priority);
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

    createProject(name, description) {
        const project = new Project(name, description);
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