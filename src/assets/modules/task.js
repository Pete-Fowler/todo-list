let tasks = [{
    title: 'Run',
    description: 'Go running',
    starred: false,
    due: '2022-06-21',
}];

const create = (title, description, starred, due) => {
        return {title, description, starred, due};
    }

export {create, tasks};