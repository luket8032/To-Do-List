import { parseISO, addDays } from 'date-fns'

const tasks = (() => {
    const allTasks = [];
    let projects = ['None']

    const taskFactory = (title, description, dueDate, priority, project) => {
        return {title, description, dueDate, priority ,project};
    };

    const checkDupeTask = (taskArr, taskTitle) => {
        return taskArr.some(task => task.title === taskTitle);
    };

    const createTask = (title, description, dueDate, priority, project) => {
         if(checkDupeTask(allTasks, title) === false) {
             const task = taskFactory(title, description, dueDate, priority, project);
             allTasks.push(task);
             return 'success';
         } else {
             return;
        };
    };

    const createProject =  (projectName) => {
        projects.push(projectName)
        console.log(projects)
    }

    const deleteTask = (taskName) => {
        allTasks.forEach((task, index) => {
            if(task.title === taskName) {
                allTasks.splice(index, 1);
            }
        });
    };

    const getTodaysTasks = () => {
        const todaysTasks = [];
        const today = (new Date()).toISOString().split('T')[0];
        allTasks.forEach(task => {
            if(task.dueDate == today) {
                todaysTasks.push(task)
            }
        });
            return todaysTasks;
    };

    const getUpcomingTasks = () => {
        const upcomingTasks = [];
        const startDate = new Date().setHours(0,0,0,0);
        const endDate = addDays(startDate, 7)
        allTasks.forEach(task => {
            const taskDate = parseISO(task.dueDate)
            if(taskDate >= startDate && taskDate <= endDate) {
                upcomingTasks.push(task)
            }
        });
        return upcomingTasks
    };

    const getProjects = () => {

    }

    return {createTask, deleteTask, getTodaysTasks, getUpcomingTasks, createProject, allTasks, projects};
})();

export {tasks}