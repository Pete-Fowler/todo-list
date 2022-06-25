const projects = [
    {
    name: 'Main',
    tasks: []
    },
];

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

export {projects, blank, add, del};