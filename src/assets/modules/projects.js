let projects = [
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

const del = (id) => {
    projects.splice(id, 1);
}

export {projects, del, update, create};