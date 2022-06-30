
import * as tasksDom from './assets/modules/tasksDom.js';
import * as projDom from './assets/modules/projectsDom.js'
import './style.css';
import { tasks } from './assets/modules/tasks.js';
import { projects } from './assets/modules/projects.js';


tasksDom.render();
tasksDom.listen();
projDom.render();
projDom.listen();






