import * as task from './task.js';

const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');

function listen() {
    newTaskBtn.addEventListener('click', displayTask);

    const newProjectBtn = document.querySelector('new-project');
}

// UI for new task info
// add task DIV to DOM with editable inputs
function displayTask() {

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
    description.setAttribute('maxlength', '74');
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

export {listen, displayTask};