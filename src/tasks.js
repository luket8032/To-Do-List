const tasks = (() => {
    const taskFactory = (title, description, dueDate, priority, project) => {
        return {title, description, dueDate, priority ,project}
    };

    const createTask = (title, description, dueDate, priority, project, taskArr) => {
        const task = taskFactory(title, description, dueDate, priority, project);
        taskArr.push(task);
        return task
    }

    return {createTask}
})();

export {tasks}