import { tasks } from "./tasks";

const domStuff = (() => {
    const taskHeader = document.getElementById('taskHeader');

    const addTaskElement = (task) => {
        
    }
    
    const showAllTasks = () => {
        taskHeader.textContent = 'All Tasks'
    }

    const showTodayTasks = () => {
        taskHeader.textContent = `Today's Tasks`
    }

    const showUpcomingTasks = () => {
        taskHeader.textContent = 'Upcoming Tasks'
    }

    return { showAllTasks, showTodayTasks, showUpcomingTasks }
})();

export { domStuff }