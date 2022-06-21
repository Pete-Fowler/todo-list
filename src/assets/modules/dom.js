import * as task from './task.js';

const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');

function listen() {
    newTaskBtn.addEventListener('click', newTask);

    const newProjectBtn = document.querySelector('new-project');
}

// UI for new task info
// call task.create for new object (and add this to object of all tasks?)
// add new task to DOM
// add new task to tasks array
function newTask() {
    const task = document.createElement('div');
    task.id = 'task';
    main.insertBefore(task, newTaskBtn);
}

export {listen, newTask};