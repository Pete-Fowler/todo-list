const storeProjects = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
}

const getProjects = () => {
    let existingProjects = JSON.parse(localStorage.getItem('projects'));
    return existingProjects;
}

const update = (index, property, value) => {
    projects[index][property] = value;
}

const create = (name) => {
    return {name};
}

const del = (id) => {
    projects.splice(id, 1);
}

let projects = [];

if(localStorage.length !== 0){
    projects = getProjects();
}

export {projects, del, update, create, storeProjects, getProjects};