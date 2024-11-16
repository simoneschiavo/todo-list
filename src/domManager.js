import defaultProjectIcon from "./img/default-project-icon.svg";
import deleteIcon from "./img/delete-icon.svg";

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
    const projectsContainer = document.querySelector(".projects-info-container");
    projectsContainer.innerHTML = "";

    const projectTitle = document.createElement("h1");
    projectTitle.innerText = project.name;

    const projectDescription = document.createElement("p");
    projectDescription.innerText = project.description;

    projectsContainer.append(projectTitle, projectDescription);
    
    const tasksContainer = document.querySelector(".tasks-container");
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

            /*const description = document.createElement("p");
            description.innerText = task.description;*/

            const dueDate = document.createElement("p");
            dueDate.classList.add("task-date");
            dueDate.classList.add("tag");
            dueDate.innerText = task.dueDate;

            const priority = document.createElement("p");
            priority.classList.add("tag");
            const priorityLowerCase = task.priority.toLowerCase();
            priority.classList.add(priorityLowerCase);
            priority.innerText = task.priority;

            taskDiv.append(dueDate, title, /*description,*/ priority);

            const deleteButton = document.createElement("img");
            deleteButton.classList.add("delete-btn");
            deleteButton.src = deleteIcon;
            deleteButton.addEventListener("click", () => {
                project.deleteTask(index);
                renderTasks(project);
            });

            taskDiv.appendChild(deleteButton);

            tasksContainer.appendChild(taskDiv);
        })
    }
}

export { renderDefaultProject, renderCustomProject, renderTasks };