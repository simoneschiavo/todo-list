import { TaskManager } from "./tasks";

export class Project {
    constructor(name) {
        this.name = name;
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