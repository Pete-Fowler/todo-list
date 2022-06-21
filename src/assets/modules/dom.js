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
    title.id = 'name';
    title.setAttribute('placeholder', 'Name');
    title.setAttribute('type', 'text');
    title.setAttribute('minlength', '1');
    title.setAttribute('maxlength', '25');
    task.appendChild(title);

    const description = document.createElement('input');
    description.id = 'description';
    
    const priority = document.createElement('input');
    priority.id = 'priority';
    
    const due = document.createElement('input');
    due.id = 'due';


    main.insertBefore(task, newTaskBtn);
}

export {listen, displayTask};