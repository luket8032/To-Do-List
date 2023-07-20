const tasks = (() => {
    const allTasks = []

    const taskFactory = (title, description, dueDate, priority, project) => {
        return {title, description, dueDate, priority ,project}
    };

    const checkDupeTask = (taskArr, taskTitle) => {
        return taskArr.some(task => task.title === taskTitle);
    };

    const createTask = (title, description, dueDate, priority, project) => {
         if(checkDupeTask(allTasks, title) === false) {
             const task = taskFactory(title, description, dueDate, priority, project);
             allTasks.push(task);
             return 'success'
         } else {
             return
        };
    };

    const deleteTask = (taskName) => {
        allTasks.forEach((task, index) => {
            if(task.title === taskName) {
                allTasks.splice(index, 1)
            }
        })
    }

    return {createTask, deleteTask, allTasks}
})();

export {tasks}