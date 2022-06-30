import { projects } from './projects.js';
import * as tasks from './tasks.js';
import * as projectsDom from './projectsDom.js';
import menu1 from '../images/menu.svg';
import star1 from '../images/star.svg';
import * as index from '../../index.js';

const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');
const newProjectBtn = document.querySelector('#new-project');

window.addEventListener('click', closeDrop);

function listen() {
    newTaskBtn.addEventListener('click', newTaskClick);

}

function render(array = tasks.tasks) {
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
                del.classList.add('menu-item-hover');
                dropDownContent.appendChild(del);
                del.addEventListener('click', deleteTask);

                const hr = document.createElement('hr');
                dropDownContent.appendChild(hr);
                
                const mps = document.querySelectorAll('.menu-project');
                mps.forEach(e => e.remove);
                for (let i = 0; i < projects.length; i++) {
                    let proj = document.createElement('div');
                    proj.id = `mp${i}`;
                    proj.classList.add('menu-item');
                    proj.classList.add('menu-item-hover');
                    proj.textContent = projects[i].name;
                    proj.addEventListener('click', assignTask);
                    dropDownContent.appendChild(proj);
                }

                // const none = document.createElement('div');
                // none.id = 'none'
                // none.classList.add('menu-item');
                // none.classList.add('menu-item-hover');
                // none.addEventListener('click', removeFromProject);

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
    let item = e.target.closest('.menu-item');
    let taskIndex = e.target.closest('.task').id;
    let projectName = item.textContent;
    if (tasks.tasks[taskIndex].project === projectName) {
        tasks.tasks[taskIndex].project = '';
        item.classList.remove('ddcactive');
        item.classList.remove('menu-item-hover');
        item.addEventListener('mouseout', () => 
        {item.classList.add('menu-item-hover')});
    } else {
    tasks.update(taskIndex, 'project', projectName);
    item.classList.toggle('ddcactive');
    }
<<<<<<< HEAD
    index.fillStorage();
=======
    tasks.storeTasks();
>>>>>>> 588f28d (Local storage for tasks working)
}

function closeDrop(e) {
  if(!e.target.matches('#menu, .dropdown-content, .menu-item')) {
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
    tasks.update(id, property, value);
<<<<<<< HEAD
    index.fillStorage();
=======
    tasks.storeTasks();
>>>>>>> 588f28d (Local storage for tasks working)
}

function handleStar(e) {
    const star = e.target.closest('#star');
    star.classList.toggle('filter-white');
    let id = star.closest('.task').id;
    tasks.toggleStarred(id);
<<<<<<< HEAD
    index.fillStorage();
=======
    tasks.storeTasks();
>>>>>>> 588f28d (Local storage for tasks working)
}

function newTaskClick() {
    tasks.tasks.push(tasks.create('', '', false, '', projectsDom.projectSelected));
    projectsDom.updateArray();
    render(projectsDom.currentArray);
<<<<<<< HEAD
    index.fillStorage();
=======
    tasks.storeTasks();
>>>>>>> 588f28d (Local storage for tasks working)
}

function deleteTask (e) {
    let id = e.target.closest('.task').id;
    tasks.del(id);
    render(projectsDom.currentArray);
<<<<<<< HEAD
    index.fillStorage();
}
=======
    tasks.storeTasks();
}


>>>>>>> 588f28d (Local storage for tasks working)

export {listen, render};