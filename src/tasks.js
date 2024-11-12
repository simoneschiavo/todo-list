class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    createTask(title, description, dueDate, priority) {
        const task = new Task(title, description, dueDate, priority);
        this.tasks.push(task);
        return task;
    }

    getTask(index) {
        return this.tasks[index];
    }

    //updatedData is an object
    updateTask(index, updatedData) {
        const task = this.tasks[index];
        if (task) {
            task.title = updatedData.title || task.title;
            task.description = updatedData.description || task.description;
            task.dueDate = updatedData.dueDate || task.dueDate;
            task.priority = updatedData.priority || task.priority;
        }
        return null;
    }

    deleteTask(index) {
        if (index >= 0 && index < TaskManager.tasks.length) {
            TaskManager.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    getAllTasks() {
        return TaskManager.tasks;
    }
}