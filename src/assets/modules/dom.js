import * as taskmod from './task.js';

const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');
const newProjectBtn = document.querySelector('#new-project');

function listen() {
    newTaskBtn.addEventListener('click', handleClick);
}

function renderTasks() {
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

        const description = document.createElement('input');
        description.classList.add('description');
        description.setAttribute('type', 'text');
        description.setAttribute('placeholder', 'Description');
        description.setAttribute('minlength', '1');
        description.setAttribute('maxlength', '111');
        description.value = taskmod.tasks[i].description;
        task.appendChild(description);

        const starredL = document.createElement('label');
        starredL.setAttribute('for', 'starred');
        starredL.textContent = 'Important:';

        const starred = document.createElement('input');
        starred.classList.add('starred');
        starred.setAttribute('type', 'checkbox');
        starred.value = taskmod.tasks[i].starred;
        starredL.appendChild(starred);
        task.appendChild(starredL);

        const due = document.createElement('input');
        due.classList.add('due');
        due.setAttribute('type', 'date');
        due.setAttribute('placeholder', 'Name');
        due.value = taskmod.tasks[i].due;
        task.appendChild(due);

        main.insertBefore(task, newTaskBtn);
    }
}

function handleClick() {
    displayNewTask();
}

// UI for new task info
// add task DIV to DOM with editable inputs
function displayNewTask() {

    // Task div
    const task = document.createElement('div');
    task.classList.add('task');

    // Input elements

    const title = document.createElement('input');
    title.id = 'title';
    title.setAttribute('type', 'text');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('minlength', '1');
    title.setAttribute('maxlength', '25');
    task.appendChild(title);

    const description = document.createElement('input');
    description.id = 'description';
    description.setAttribute('type', 'text');
    description.setAttribute('placeholder', 'Description');
    description.setAttribute('minlength', '1');
    description.setAttribute('maxlength', '111');
    task.appendChild(description);

    const starredL = document.createElement('label');
    starredL.setAttribute('for', 'starred');
    starredL.textContent = 'Important:';

    const starred = document.createElement('input');
    starred.id = 'starred';
    starred.setAttribute('type', 'checkbox');
    starredL.appendChild(starred);
    task.appendChild(starredL);

    const due = document.createElement('input');
    due.id = 'due';
    due.setAttribute('type', 'date');
    due.setAttribute('placeholder', 'Name');
    task.appendChild(due);

    main.insertBefore(task, newTaskBtn);
}

export {listen, renderTasks};