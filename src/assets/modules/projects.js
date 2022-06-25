const projects = [
    {
    name: 'Main',
    tasks: []
    },
];

const update = (index, property, value) => {
    projects[index][property] = value;
    console.log(projects);
}

const create = (name, tasks) => {
    return {name, tasks};
}

const blank = () => {
    projects.push(create('', ''));
}

const add = (index, task) => {
    projects[index].tasks.push(task);
}

const del = (id) => {
    projects.splice(id, 1);
}

export {projects, blank, add, del, update};