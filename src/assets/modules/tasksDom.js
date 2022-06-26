import { projects } from './projects.js';
import * as taskmod from './tasks.js';
import * as projectsDom from './projectsDom.js';
import menu1 from '../images/menu.svg';
import star1 from '../images/star.svg';

const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');
const newProjectBtn = document.querySelector('#new-project');

window.addEventListener('click', closeDrop);

function listen() {
    newTaskBtn.addEventListener('click', newTaskClick);

}

function render(array = taskmod.tasks) {
    document.querySelectorAll('.task').forEach((e) => {e.remove()});

    for(let i=0; i < array.length; i++) {
        const task = document.createElement('div');
            task.id = `${i}`;
            task.classList.add('task');

        const title = document.createElement('input');
            title.classList.add('title');
            title.setAttribute('type', 'text');
            title.setAttribute('placeholder', 'Title');
            title.setAttribute('minlength', '1');
            title.setAttribute('maxlength', '25');
            title.value = array[i].title;
            task.appendChild(title);
            title.addEventListener('change', handleChange);

        const description = document.createElement('input');
            description.classList.add('description');
            description.setAttribute('type', 'text');
            description.setAttribute('placeholder', 'Description');
            description.setAttribute('minlength', '1');
            description.setAttribute('maxlength', '111');
            description.value = array[i].description;
            task.appendChild(description);
            description.addEventListener('change', handleChange);

        const star = new Image();
            star.src = star1;
            star.alt = 'Star icon';
            star.id = 'star';
            if (array[i].starred === true) {
                star.classList.add('filter-white');
            }
            task.appendChild(star);
            star.addEventListener('click', handleStar);
            star.addEventListener('mouseover', overStar);
            star.addEventListener('mouseout', outStar);

        const due = document.createElement('input');
            due.classList.add('due');
            due.setAttribute('type', 'date');
            due.value = array[i].due;
            task.appendChild(due);
            due.addEventListener('change', handleChange);

        
        const dropDown = document.createElement('div');
            dropDown.classList.add('dropdown');

            const menu = new Image();
                menu.src = menu1;
                menu.id = 'menu';
                menu.alt = 'Menu icon';
                dropDown.appendChild(menu);
                menu.addEventListener('click', handleDrop);

            const dropDownContent = document.createElement('div');
                dropDownContent.classList.add('dropdown-content');
                dropDownContent.id = `dropdown-content-${i}`;
                
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
                    proj.addEventListener('click', assignTask);
                    dropDownContent.appendChild(proj);
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
    taskmod.update(tIndex, 'project', pName);
}

function closeDrop(e) {
  if(!e.target.matches('#menu')) {
    let ddc = document.querySelector('.show');
    if (ddc === null) {return;}
    if (ddc.classList.contains('show')) {
    ddc.classList.toggle('show');
    }
  }
}
   

function handleDrop(e) {
    let task = e.target.closest('.task').id;
    let ddc = document.querySelector(`#dropdown-content-${task}`);
    ddc.classList.toggle('show');
}

function handleChange(e) {
    let property = e.target.className;
    let value = e.target.value;
    let id = e.target.closest('.task').id;
    taskmod.update(id, property, value);
}

function handleStar(e) {
    const star = e.target.closest('#star');
    star.classList.toggle('filter-white');
    let id = star.closest('.task').id;
    taskmod.toggleStarred(id);
}

function newTaskClick() {
    taskmod.blank();
    render(projectsDom.currentArray);
}

function deleteTask (e) {
    let id = e.target.closest('.task').id;
    taskmod.del(id);
    render(projectsDom.currentArray);
}

export {listen, render};