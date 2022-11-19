import * as tasksDom from "./tasksDom.js";
import * as projects from "./projects";
import * as tasks from "./tasks.js";
import deleteIcon from "../images/delete.svg";
import newProject1 from "../images/newProject.svg";

const nav = document.querySelector("#nav-projects");
const newProjectBtn = document.querySelector("#new-project");
const all = document.querySelector("#all");
const starred = document.querySelector("#starred");
const today = document.querySelector("#today");
const thisWeek = document.querySelector("#this-week");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modal-content");
const modalInput = document.querySelector("#modal-input");
const modalDelete = document.querySelector("#modal-delete");

let projectSelected = "";
let currentView = "all";
let currentArray = tasks.tasks;

const render = () => {
  const domProjects = document.querySelectorAll(".project-wrapper");
  domProjects.forEach((e) => e.remove());

  for (let i = 0; i < projects.projects.length; i++) {
    const wrapper = document.createElement("div");
    wrapper.id = `p${i}`;
    wrapper.setAttribute("class", "project-wrapper");

    const proj = document.createElement("button");
    proj.classList.add("nav");
    proj.classList.add("project");
    proj.textContent = projects.projects[i].name;
    wrapper.appendChild(proj);
    proj.addEventListener("click", projectView);

    const img = new Image();
    img.src = deleteIcon;
    img.id = "delete-icon";
    img.alt = "Delete icon";
    img.addEventListener("click", removeProject);

    wrapper.appendChild(img);

    nav.insertBefore(wrapper, newProjectBtn);
  }
};

const showModal = () => {
  modal.style.display = "block";
};

const handleInput = () => {
  let value = modalInput.value;
  projects.projects.push(projects.create(value));
  modalInput.value = "";
  render();
  tasksDom.render(currentArray);
  projects.storeProjects();
};

const closeModalButton = () => {
  modal.style.display = "none";
};

const closeModalWindow = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

const removeProject = (e) => {
  let el = e.target.closest(".project-wrapper");
  let id = el.id.slice(-1);
  let projectName = projects.projects[id].name;
  projects.del(id);
  el.remove();
  modalInput.value = "";
  tasks.tasks.forEach((obj) => {
    if (obj.project === projectName) {
      obj.project = "";
    }
  });
  tasksDom.render(currentArray);
  projects.storeProjects();
};

const listen = () => {
  const newProject = new Image();
  newProject.src = newProject1;
  newProject.alt = "New project icon";
  newProject.id = "new-project-img";
  newProjectBtn.appendChild(newProject);

  newProjectBtn.addEventListener("click", showModal);
  all.addEventListener("click", changeTasksView);
  starred.addEventListener("click", changeTasksView);
  today.addEventListener("click", changeTasksView);
  thisWeek.addEventListener("click", changeTasksView);
  modalDelete.addEventListener("click", closeModalButton);
  window.addEventListener("click", closeModalWindow);
  modalInput.addEventListener("change", handleInput);
};

const projectView = (e) => {
  removeActive(e);
  makeActive(e);

  let id = e.target.closest(".project-wrapper").id.slice(-1);
  currentView = projects.projects[id].name;
  projectSelected = currentView;
  updateArray();
};

const removeActive = (e) => {
  let btns = document.querySelectorAll("button.nav");
  btns.forEach((e) => e.classList.remove("active"));
};

const makeActive = (e) => {
  let element = e.target.closest("button");
  element.classList.add("active");
};

const updateArray = () => {
  if (
    currentView === "all" ||
    currentView === "starred" ||
    currentView === "today" ||
    currentView === "this-week"
  ) {
    currentArray = tasks.tasks;
    tasksDom.render(currentArray);
  } else {
    currentArray = tasks.tasks.filter((obj) => obj.project === currentView);
    tasksDom.render(currentArray);
  }
};

function changeTasksView(e) {
  removeActive(e); // UI highlighting
  makeActive(e);
  let id = e.target.closest("button").id;

  currentView = id;
  projectSelected = "";

  if (currentView === "all") {
    currentArray = tasks.tasks;
    tasksDom.render(currentArray);
  }
  if (currentView === "starred") {
    currentArray = tasks.tasks.filter((object) => object["starred"] === true);
    tasksDom.render(currentArray);
  }
  if (currentView === "today") {
    let today = new Date();
    today = new Date(
      Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
    );
    today = today.toISOString().split("T")[0];
    currentArray = tasks.tasks.filter((object) => object["due"] === today);
    tasksDom.render(currentArray);
  }
  if (currentView === "this-week") {
    let today = new Date();
    today = new Date(
      Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
    );
    let week = new Date();
    week = new Date(
      Date.UTC(week.getFullYear(), week.getMonth(), week.getDate())
    );
    week.setDate(today.getDate() + 7);

    currentArray = tasks.tasks.filter((object) => {
      let date = new Date(Date.parse(object["due"]));
      return date >= today && date <= week;
    });
    tasksDom.render(currentArray);
  }
}

export {
  render,
  listen,
  currentArray,
  currentView,
  updateArray,
  projectSelected,
};
