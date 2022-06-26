const projects = [
    {
    name: 'Main',
    },
];

const update = (index, property, value) => {
    projects[index][property] = value;
}

const create = (name) => {
    return {name};
}

const add = (index, task) => {
    projects[index].tasks.push(task);
}

const del = (id) => {
    projects.splice(id, 1);
}

export {projects, add, del, update, create};