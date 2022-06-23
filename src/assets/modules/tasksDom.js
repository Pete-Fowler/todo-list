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

        // Dropdown menu with delete task and projects list
        const menu = document.createElement('select');
        menu.id = 'menu';

        // Delete task
        const del = document.createElement('option');
        del.id = 'delete';
        del.textContent = 'Delete Task';
        menu.appendChild(del);
        menu.addEventListener('change', handleChange);

        // Render projects list to assign task to project
        for(let i = 0; i < projects.length; i++) {
            const option = document.createElement('option');
            option.id = `o${i}`;
            option.textContent = projects[i].name;
            menu.appendChild(option);
        }
      
        task.appendChild(menu);

        main.insertBefore(task, newTaskBtn);
    }
}

function handleChange(e) {
    if (this.value === 'Delete Task')   // this.value is string like 'Main'
    {
        deleteTask(e);
    } else {
        let p = projects.find(projectName => this.value);
                        // p now points to projects object {}
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