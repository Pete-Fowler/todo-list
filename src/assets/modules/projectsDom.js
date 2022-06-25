import * as tasksDom from './tasksDom.js';
import * as projects from "./projects";
import * as tasksMod from './tasks.js';
import deleteIcon from '../images/delete.svg';

const nav = document.querySelector('#nav-projects');
const newProjectBtn = document.querySelector('#new-project');
const all = document.querySelector('#all');
const starred = document.querySelector('#starred');
const today = document.querySelector('#today');
const thisWeek = document.querySelector('#this-week');

let currentView = 'all';

const render = () => {
    const domProjects = document.querySelectorAll('.project-wrapper');
    domProjects.forEach(e => e.remove());
    
    for(let i=0; i < projects.projects.length; i++) {
        const wrapper = document.createElement('div');
        wrapper.id = `p${i}`;
        wrapper.setAttribute('class', 'project-wrapper');
        
        const proj = document.createElement('input');
        proj.setAttribute('placeholder', 'Project');
        proj.classList.add('nav');
        proj.classList.add('project');
        proj.value = projects.projects[i].name;
        wrapper.appendChild(proj);
        proj.addEventListener('change', handleChange);

        const img = new Image();
        img.src = deleteIcon;
        img.id = 'delete-icon';
        img.alt = 'Delete icon';
        img.addEventListener('click', removeProject);

        wrapper.appendChild(img);

        nav.insertBefore(wrapper, newProjectBtn);
    }
}

const addProject = () => {
    projects.blank();
    render();
    tasksDom.render();
}

const removeProject = (e) => {
    let el = e.target.closest('.project-wrapper');
    let id = el.id.slice(-1);
    projects.del(id);
    el.remove();
    tasksDom.render();
}

const listen = () => {
    newProjectBtn.addEventListener('click', addProject);
    all.addEventListener('click', changeTasksView)
}

const changeTasksView = (e) => {
    console.log(tasksMod.tasks);
    let id = e.target.closest('button').id;
    tasksDom.render(tasksMod.tasks);
}

const handleChange = (e) => {
    let id = e.target.closest('.project-wrapper').id.slice(-1);
    let value = e.target.closest('.project').value;
    projects.update(id, 'name', value);
    tasksDom.render();
}

export {render, listen};