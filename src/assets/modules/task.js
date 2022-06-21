let tasks = [{
    title: 'Run',
    description: 'Go running',
    starred: true,
    due: 6/22/22,
}];

const create = (title, description, starred, due) => {
        return {title, description, starred, due};
    }

export {create, tasks};