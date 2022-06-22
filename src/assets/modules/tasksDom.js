import * as taskmod from './tasks.js';

const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');
const newProjectBtn = document.querySelector('#new-project');

function listen() {
    newTaskBtn.addEventListener('click', newTaskClick);

}

function renderTasks() {
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

        const project = document.createElement('input');
        project.classList = 'project';
        if (taskmod.tasks[i].project = '') {
            taskmod.tasks[i].project = ''
        }

        const starred = document.createElement('input');
        starred.classList.add('starred');
        starred.setAttribute('type', 'checkbox');
        starred.value = taskmod.tasks[i].starred;
        starredL.appendChild(starred);
        task.appendChild(starredL);

        const due = document.createElement('input');
        due.classList.add('due');
        due.setAttribute('type', 'date');
        due.value = taskmod.tasks[i].due;
        task.appendChild(due);

        const del = document.createElement('button');
        del.classList.add('delete');
        del.textContent = 'X';
        del.addEventListener('click', deleteTask);
        task.appendChild(del);

        main.insertBefore(task, newTaskBtn);
    }
}

function newTaskClick() {
    taskmod.blank();
    renderTasks();
}

function deleteTask (e) {
    let div = e.target.closest('.task');
    let id = div.id;
    taskmod.del(id);
    renderTasks();
}

export {listen, renderTasks};