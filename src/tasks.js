import { parseISO, addDays } from 'date-fns'
import { domStuff } from './dom';

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

    const editTask = (toChange, title, description, dueDate, priority) => {
        if(checkDupeTask(allTasks, title) === false) {
            allTasks.forEach(task => {
                if (task.title === toChange) {
                    task.title = title;
                    task.description = description;
                    task.dueDate = dueDate;
                    task.priority = priority;
                }
            });
        } else {
            window.alert("Task name already Taken")
        }
    };

    const checkDupeProject = (projectName) => {
        return projects.includes(projectName);
    }

    const createProject =  (projectName) => {
        if(checkDupeProject(projectName) === false) {
            projects.push(projectName);
            return 'success';
        } else {
            return;
        }
    }

    const deleteTask = (taskName) => {
        allTasks.forEach((task, index) => {
            if(task.title === taskName) {
                allTasks.splice(index, 1);
            }
        });
    };

    const deleteProject = (projectName) => {
        projects.forEach((project, index) => {
            if(project === projectName) {
                projects.splice(index, 1);
                deleteProjectTasks(projectName)
            }
        });
    }

    const deleteProjectTasks = (projectName) => {
        allTasks.forEach((task, index) => {
            if(task.project === projectName) {
                allTasks.splice(index, 1);
            }
        })
    }

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

    const showTaskInfo = (taskName) => {
        allTasks.forEach(task => {
            if(task.title === taskName) {
                domStuff.showInfoElement(task);
            }
        })
    }

    const returnTask = (taskName) => {
        allTasks.forEach(task => {
            if(task.title === taskName) {
                domStuff.showEditForm(task); 
            }
        })
    }

    return {createTask, deleteTask, getTodaysTasks, getUpcomingTasks, createProject, deleteProject, showTaskInfo,
         returnTask, editTask, allTasks, projects};
})();

export {tasks}