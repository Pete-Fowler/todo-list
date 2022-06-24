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

export {projects, blank, add};