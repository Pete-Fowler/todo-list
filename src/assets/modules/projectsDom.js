import * as projects from "./projects";

const nav = document.querySelector('#nav-projects');
const newProjectBtn = document.querySelector('#new-project');

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

        const del = document.createElement('button');
        del.id = 'delete-project';
        del.textContent = 'X';
        del.addEventListener('click', removeProject);

        wrapper.appendChild(del);

        nav.insertBefore(wrapper, newProjectBtn);
    }
}

const addProject = () => {
    projects.blank();
    render();
}

const removeProject = (e) => {
    let el = e.target.closest('.project-wrapper');
    let id = el.id.slice(-1);
    projects.del(id);
    el.remove();
}

const listen = () => {
    newProjectBtn.addEventListener('click', addProject);
}

export {render, listen};