let tasks = [{
    title: 'Run',
    description: 'Go running',
    project: '',
    starred: false,
    due: '2022-06-21',
}];

const create = (title, description, project, starred, due) => {
        return {title, description, project, starred, due};
    }

const blank = () => {
    tasks.push(create('', '', '', ''));
}
const del = (id) => {
    tasks.splice(id, 1);
}

export {create, tasks, blank, del};