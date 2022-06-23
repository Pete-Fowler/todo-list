const projects = [{name: 'Main'}];

const create = (name) => {
    return {name};
}

const blank = () => {
    projects.push(create(''));
}



export {projects, blank};