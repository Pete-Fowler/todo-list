import * as projects from "./projects";

const nav = document.querySelector('#nav-projects');
const newProjectBtn = document.querySelector('#new-project');

const render = () => {
    const domProjects = document.querySelectorAll('.project');
    domProjects.forEach(e => e.remove());
    
    for(let i=0; i < projects.projects.length; i++) {
        const proj = document.createElement('input');
        proj.id = `p${i}`;
        proj.setAttribute('placeholder', 'Project');
        proj.classList.add('nav');
        proj.classList.add('project');
        proj.value = projects.projects[i].name;
        nav.insertBefore(proj, newProjectBtn);
    }
}

const addProject = () => {
    projects.blank();
    render();
}

const listen = () => {
    newProjectBtn.addEventListener('click', addProject);
}

export {render, listen};