import { tasks } from "./tasks";

const domStuff = (() => {
    const taskContainer = document.getElementById('task-container');
    const taskHeader = document.getElementById('taskHeader');
    const taskList = document.getElementById('taskList');

    const addTaskElement = (task) => {
        const taskElement = document.createElement('div');
        const icons = document.createElement('div');
        const check = document.createElement('input');
        const title = document.createElement('label');
        const trashIcon = document.createElement('i')
        const infoIcon = document.createElement('i');
        title.textContent = `${task.title}`;
        taskElement.classList.add('task-item');
        trashIcon.classList.add('fa', 'fa-trash-o');
        infoIcon.classList.add('fa', 'fa-info-circle');
        check.classList.add('task-check');
        title.classList.add('task-crossout');
        icons.classList.add('icons')
        check.type = 'checkbox'
        check.id = 'task'
        title.setAttribute('for', 'task')
        icons.append(trashIcon, infoIcon)
        taskElement.append(check, title, icons)
        taskList.append(taskElement);
    }
    
    const showAllTasks = () => {
        taskHeader.textContent = `All Tasks (${tasks.allTasks.length})`;
        taskList.innerHTML = ''
        tasks.allTasks.forEach(task => addTaskElement(task));
    }

    const showTodayTasks = () => {
        taskHeader.textContent = `Today's Tasks`;
        taskList.innerHTML = ''
    }

    const showUpcomingTasks = () => {
        taskHeader.textContent = 'Upcoming Tasks';
        taskList.innerHTML = ''
    }

    return { showAllTasks, showTodayTasks, showUpcomingTasks, addTaskElement }
})();

export { domStuff }