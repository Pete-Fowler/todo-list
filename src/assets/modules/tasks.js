let tasks = [{
    title: 'Run',
    description: 'Go running',
    starred: false,
    due: '2022-06-21',
    project: '',
}];

const create = (title, description, starred, due, project) => {
        return {title, description, starred, due, project};
    }

const blank = () => {
    tasks.push(create('', '', '', '', ''));
}
const del = (id) => {
    tasks.splice(id, 1);
}

export {create, tasks, blank, del};