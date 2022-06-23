import { projects } from './projects.js';
import * as taskmod from './tasks.js';

const main = document.querySelector('#main');
const newTaskBtn = document.querySelector('#new-task');
const newProjectBtn = document.querySelector('#new-project');

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


        const dropDown = document.createElement('div');
        dropDown.classList.add('dropdown');

            const dropDownBtn = document.createElement('button');
            dropDownBtn.id = 'dropdown-button';
            dropDownBtn.textContent = 'M';
            dropDownBtn.addEventListener('click', expand);

            const dropDownContent = document.createElement('div');
            dropDownContent.classList.add = 'dropdown-content';


        dropDown.appendChild(dropDownBtn);
        dropDown.appendChild(dropDownContent);

        task.appendChild(dropDown);

        main.insertBefore(task, newTaskBtn);
    }
}

function expand() {
    document.createElement(div);
    div.id = 'menu';

}

function handleChange(e) {
    if (this.value === 'Delete Task')   // this.value is string like 'Main'
    {
        deleteTask(e);
    } else {
        let p = projects.find(projectName => this.value);   // p now points to projects object {}
        let div = e.target.closest('.task');
        let id = div.id;
        taskmod.tasks[id].project = this.value;
        console.log(taskmod.tasks[id]);
    }
}

function newTaskClick() {
    taskmod.blank();
    render();
}

function deleteTask (e) {
    let div = e.target.closest('.task');
    let id = div.id;
    taskmod.del(id);
    render();
}

export {listen, render};