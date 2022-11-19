const storeTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getTasks = () => {
  let existingTasks = JSON.parse(localStorage.getItem("tasks"));
  return existingTasks;
};

const update = (index, property, value) => {
  tasks[index][property] = value;
};

const create = (title, description, starred, due, project) => {
  return { title, description, starred, due, project };
};

const add = (object) => {
  tasks.push(object);
};

const del = (id) => {
  tasks.splice(id, 1);
};

const toggleStarred = (index) => {
  if (tasks[index].starred === false) {
    tasks[index].starred = true;
  } else {
    tasks[index].starred = false;
  }
};

let tasks = [];
if (localStorage.length !== 0) {
  tasks = getTasks();
}

export { update, create, tasks, getTasks, add, del, toggleStarred, storeTasks };
