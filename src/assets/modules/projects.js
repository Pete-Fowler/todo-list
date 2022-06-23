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



export {projects, blank};