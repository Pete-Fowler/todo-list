import { projects } from "./projects"

const wrapper = document.querySelector('#nav-projects');
const newProjectBtn = document.querySelector('#new-project');

const render = () => {
    for(let i=0; i < projects.length; i++) {
        const proj = document.createElement('div');
        proj.id = `p${i}`;
        proj.classList.add('project');
        proj.textContent = projects[i];
        wrapper.insertBefore(proj, newProjectBtn);
    }
}

// const listen = () => {
//     newProjectBtn.addEventListener('click', handleClick);
// } 

export {render}