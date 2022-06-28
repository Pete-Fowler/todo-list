
import * as tasksDom from './assets/modules/tasksDom.js';
import * as projDom from './assets/modules/projectsDom.js'
import './style.css';
import { tasks } from './assets/modules/tasks.js';
import { projects } from './assets/modules/projects.js';

const fillStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('projects', JSON.stringify(projects));
}

const getStorage = () => {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    projects = JSON.parse(localStorage.getItem('projects'));
}

const storage = (() => {
    if (localStorage.length === 0) {
    fillStorage();
    } else {
    getStorage();
    }
})();

tasksDom.render();
tasksDom.listen();
projDom.render();
projDom.listen();





export {fillStorage, getStorage}