import { projects } from './projects.js';
import * as taskmod from './tasks.js';
import menu1 from '../images/menu.svg';
import star1 from '../images/star.svg';

const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');
const newProjectBtn = document.querySelector('#new-project');

window.addEventListener('click', closeDrop);

function listen() {
    newTaskBtn.addEventListener('click', newTaskClick);

}

function render() {
    document.querySelectorAll('.task').forEach((e) => {e.remove()});

    for(let i=0; i < taskmod.tasks.length; i++) {
        const task = document.createElement('div');
            task.id = `${i}`;
            task.classList.add('task');

        const title = document.createElement('input');
            title.classList.add('title');
            title.setAttribute('type', 'text');
            title.setAttribute('placeholder', 'Title');
            title.setAttribute('minlength', '1');
            title.setAttribute('maxlength', '25');
            title.value = taskmod.tasks[i].title;
            task.appendChild(title);
            title.addEventListener('change', handleChange);

        const description = document.createElement('input');
            description.classList.add('description');
            description.setAttribute('type', 'text');
            description.setAttribute('placeholder', 'Description');
            description.setAttribute('minlength', '1');
            description.setAttribute('maxlength', '111');
            description.value = taskmod.tasks[i].description;
            task.appendChild(description);
            description.addEventListener('change', handleChange);

        const star = new Image();
            star.src = star1;
            star.alt = 'Star icon';
            star.id = 'star';
            task.appendChild(star);
            star.addEventListener('click', handleStar);
            star.addEventListener('mouseover', overStar);
            star.addEventListener('mouseout', outStar);

        const due = document.createElement('input');
            due.classList.add('due');
            due.setAttribute('type', 'date');
            due.value = taskmod.tasks[i].due;
            task.appendChild(due);
            due.addEventListener('change', handleChange);

        
        const dropDown = document.createElement('div');
            dropDown.classList.add('dropdown');

            const menu = new Image();
                menu.src = menu1;
                menu.id = 'menu';
                menu.alt = 'Menu icon';
                menu.addEventListener('click', handleDrop);

                dropDown.appendChild(menu);

            const dropDownContent = document.createElement('div');
                dropDownContent.classList.add('dropdown-content');
                
                const del = document.createElement('div');
                del.classList.add('menu-item');
                del.textContent = 'Delete Task';
                dropDownContent.appendChild(del);
                del.addEventListener('click', deleteTask); 
                
                const mps = document.querySelectorAll('.menu-project');
                mps.forEach(e => e.remove);
                for (let i = 0; i < projects.length; i++) {
                    let proj = document.createElement('div');
                    proj.id = `mp${i}`;
                    proj.classList.add('menu-item');
                    proj.textContent = projects[i].name;
                    dropDownContent.appendChild(proj);
                    proj.addEventListener('click', assignTask);
                }
                dropDown.appendChild(dropDownContent);

        task.appendChild(dropDown);

        main.insertBefore(task, newTaskBtn);
    }
}

function overStar(e) {
    const star = e.target.closest('#star');
    star.classList.add('hovered');
}

function outStar(e) {
    const star = e.target.closest('#star');
    star.classList.remove('hovered');
}

function assignTask(e) {
    let tIndex = e.target.closest('.task').id;
    let pName = e.target.closest('.menu-item').textContent;
    // let pIndex = e.target.closest('.menu-item').id.slice(-1);

    taskmod.update(tIndex, 'project', pName);
}

function closeDrop(e) {
    if (!e.target.matches('#menu')) {
        let ddc = document.querySelector('.dropdown-content');
        if(ddc.classList.contains('show')) {
            ddc.classList.remove('show');
        }
    }
}

function handleDrop() {
    let ddc = document.querySelector('.dropdown-content');
    ddc.classList.toggle('show');
}

function handleChange(e) {
    let property = e.target.className;
    let value = e.target.value;
    let id = e.target.closest('.task').id;
    taskmod.update(id, property, value)
}

function handleStar() {
    const star = document.querySelector('#star');
    star.classList.toggle('filter-white');
    let id = star.closest('.task').id;
    taskmod.toggleStarred(id);
}

function newTaskClick() {
    taskmod.blank();
    render();
}

function deleteTask (e) {
    let id = e.target.closest('.task').id;
    taskmod.del(id);
    render();
}

export {listen, render};