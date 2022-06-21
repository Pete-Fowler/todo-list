export const task = () => {
    const newTask = (title, due, description, priority) => {
        return {title, due, description, priority};
    }
    return {newTask};
}