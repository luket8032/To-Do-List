const tasks = (() => {
    const taskFactory = (title, description, dueDate, priority, project) => {
        return {title, description, dueDate, priority ,project}
    };

    const checkDupeTask = (taskArr, taskTitle) => {
        return taskArr.some(task => task.title === taskTitle);
      };

    const createTask = (title, description, dueDate, priority, project, taskArr) => {
         if(checkDupeTask(taskArr, title) === false) {
             const task = taskFactory(title, description, dueDate, priority, project);
             taskArr.push(task);
             return task
         } else {
             console.log(checkDupeTask(taskArr, title))
        };
     };

    return {createTask, checkDupeTask}
})();

export {tasks}