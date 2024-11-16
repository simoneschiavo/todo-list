import defaultProjectIcon from "./img/default-project-icon.svg";
import deleteIcon from "./img/delete-icon.svg";
import updateIcon from "./img/update-icon.svg";
import showMoreIcon from "./img/open-more.svg";
import closeIcon from "./img/close-icon.svg";

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

          const basicInfoWrapper = document.createElement("div");
          basicInfoWrapper.classList.add("basic-info-wrapper");

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.classList.add("checkbox");
          checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                title.classList.add("completed");
                description.classList.add("completed");
              taskDiv.classList.add("task-completed");
            } else {
                title.classList.remove("completed");
                description.classList.remove("completed");
              taskDiv.classList.remove("task-completed");
            }
          });

          const title = document.createElement("h3");
          title.innerText = task.title;

          const dueDate = document.createElement("p");
          dueDate.classList.add("task-date");
          dueDate.classList.add("tag");
          dueDate.innerText = task.dueDate;

          const priority = document.createElement("p");
          priority.classList.add("tag");
          priority.classList.add("task-priority");
          const priorityLowerCase = task.priority.toLowerCase();
          priority.classList.add(priorityLowerCase);
          priority.innerText = task.priority;

          const showMoreButton = document.createElement("img");
          showMoreButton.classList.add("show-more-btn");
            showMoreButton.src = showMoreIcon;
            showMoreButton.addEventListener("click", () => {
                descriptionWrapper.classList.toggle("hidden");
            })
            

          basicInfoWrapper.append(checkbox, dueDate, showMoreButton, title, priority);

            const updateTaskModal = document.createElement("dialog");
            const closeButton = document.createElement("img");
            closeButton.classList.add("close-btn");
            closeButton.src = closeIcon;
            closeButton.addEventListener("click", () => {
                updateTaskModal.close();
            })

            updateTaskModal.appendChild(closeButton);

            const updateForm = document.createElement("form");
            const titleLabel = document.createElement("label");
            titleLabel.innerText = "Title: ";
            const titleInput = document.createElement("input");
            titleInput.type = "text";
            titleInput.name = "title";
            titleInput.id = "title";
            titleInput.value = task.title;
            titleLabel.appendChild(titleInput);
            const descriptionLabel = document.createElement("label");
            descriptionLabel.innerText = "Description: ";
            const descriptionInput = document.createElement("input");
            descriptionInput.type = "text";
            descriptionInput.name = "description";
            descriptionInput.id = "description"
            descriptionInput.value = task.description;
            descriptionLabel.appendChild(descriptionInput);
            const dueDateLabel = document.createElement("label");
            dueDateLabel.innerText = "Due date: ";
            const dueDateInput = document.createElement("input");
            dueDateInput.type = "date";
            dueDateInput.name = "due-date";
            dueDateInput.id = "due-date";
            dueDateInput.value = task.dueDate;
            dueDateLabel.appendChild(dueDateInput);
            const priorityLabel = document.createElement("label");
            priorityLabel.innerText = "Priority: ";
            const priorityInput = document.createElement("select");
            priorityInput.name = "priority";
            priorityInput.id = "priority";
            const priorities = ["High", "Medium", "Low"];
            priorities.forEach(priority => {
                const priorityOption = document.createElement("option");
                priorityOption.value = priority.toLowerCase();
                priorityOption.text = priority;
                if (priority.toLowerCase() === task.priority.toLowerCase()) {
                    priorityOption.selected = true;
                }
                priorityInput.appendChild(priorityOption);
            });
            priorityLabel.appendChild(priorityInput);
            const submitButton = document.createElement("button");
            submitButton.innerText = "Update";
            submitButton.type = "submit";

            updateForm.append(titleLabel, descriptionLabel, dueDateLabel, priorityLabel, submitButton);

            updateForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const updatedData = {
                    title: titleInput.value,
                    description: descriptionInput.value,
                    dueDate: dueDateInput.value,
                    priority: priorityInput.value
                };
                project.updateTask(index, updatedData);
                updateTaskModal.close();
                renderTasks(project);
            });

            updateTaskModal.appendChild(updateForm);

          const updateButton = document.createElement("img");
          updateButton.classList.add("update-btn");
          updateButton.src = updateIcon;
          updateButton.addEventListener("click", () => {
            updateTaskModal.showModal();
          });

          basicInfoWrapper.appendChild(updateTaskModal);
          basicInfoWrapper.appendChild(updateButton);

          const deleteButton = document.createElement("img");
          deleteButton.classList.add("delete-btn");
          deleteButton.src = deleteIcon;
          deleteButton.addEventListener("click", () => {
            project.deleteTask(index);
            renderTasks(project);
          });

          basicInfoWrapper.appendChild(deleteButton);

          const descriptionWrapper = document.createElement("div");
            descriptionWrapper.classList.add("description-wrapper");
            descriptionWrapper.classList.add("hidden");
          const description = document.createElement("p");
            description.innerText = task.description;
            
            descriptionWrapper.appendChild(description);

          taskDiv.appendChild(basicInfoWrapper);
          taskDiv.appendChild(descriptionWrapper);

          tasksContainer.appendChild(taskDiv);
        })
    }
}

export { renderDefaultProject, renderCustomProject, renderTasks };