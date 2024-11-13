import defaultProjectIcon from "./img/default-project-icon.svg";

function renderDefaultProject(project) {
    const defaultProjectsContainer = document.querySelector(".navbar > .default");

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const icon = document.createElement("img");
    icon.src = project.icon || defaultProjectIcon;
    icon.alt = `${project.name} icon`;

    const title = document.createElement("h3");
    title.innerText = project.name;

    projectDiv.append(icon, title);

    defaultProjectsContainer.appendChild(projectDiv);
}

function renderCustomProject(project) {
    const customProjectsContainer = document.querySelector(".navbar > .custom");

    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const icon = document.createElement("img");
    icon.src = project.icon || defaultProjectIcon;
    icon.alt = `${project.name} icon`;

    const title = document.createElement("h3");
    title.innerText = project.name;

    projectDiv.append(icon, title);

    customProjectsContainer.appendChild(projectDiv);
}

export { renderDefaultProject, renderCustomProject };