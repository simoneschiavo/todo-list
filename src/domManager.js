import defaultProjectIcon from "./img/default-project-icon.svg";

function renderDefaultProject(project) {
    const defaultProjectsContainer = document.querySelector(".navbar > .created");

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const icon = document.createElement("img");
    icon.src = project.icon || defaultProjectIcon;
    icon.alt = `${project.name} icon`;

    const title = document.createElement("h3");
    title.innerText = project.name;

    projectDiv.append(icon, title);

    projectDiv.addEventListener("click", () => {
        renderTasks(project);
    });

    defaultProjectsContainer.appendChild(projectDiv);
}

function renderCustomProject(project) {
    const customProjectsContainer = document.querySelector(".navbar > .preset");

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const icon = document.createElement("img");
    icon.src = project.icon || defaultProjectIcon;
    icon.alt = `${project.name} icon`;

    const title = document.createElement("h3");
    title.innerText = project.name;

    projectDiv.append(icon, title);

    projectDiv.addEventListener("click", () => {
        renderTasks(project);
    });

    customProjectsContainer.appendChild(projectDiv);
}

function renderTasks(project) {
    const tasksContainer = document.querySelector(".tasksContainer");
    tasksContainer.innerHTML = "";

    const tasks = project.getAllTasks();

    if (tasks.length === 0) {
        tasksContainer.innerText = "This projects looks empty."
    } else {
        tasks.forEach((task, index) => {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            const title = document.createElement("h3");
            title.innerText = task.title;

            const description = document.createElement("p");
            description.innerText = task.description;

            const dueDate = document.createElement("p");
            dueDate.innerText = task.dueDate;

            const priority = document.createElement("p");
            priority.innerText = task.priority;

            taskDiv.append(title, description, dueDate, priority);

            tasksContainer.appendChild(taskDiv);
        })
    }
}

export { renderDefaultProject, renderCustomProject, renderTasks };