import { tasks } from "./tasks";

const domStuff = (() => {
    const taskContainer = document.getElementById('task-container');
    const taskHeader = document.getElementById('taskHeader');
    const taskList = document.getElementById('taskList');

    const createCheckbox = (name) => {
        const wrapper = document.createElement('label');
        const label = document.createElement('span');
        const checkbox = document.createElement('input');
        const checkDiv = document.createElement('div');
        label.textContent = name;
        checkbox.type = 'checkbox';
        wrapper.classList.add('b-contain');
        checkDiv.classList.add('b-input');
        wrapper.append(label, checkbox, checkDiv);
        return wrapper
    }

    const addTaskElement = (task) => {
        const checkElement = createCheckbox(task.title)
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item')
        taskElement.append(checkElement)
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

    return { showAllTasks, showTodayTasks, showUpcomingTasks }
})();

export { domStuff }