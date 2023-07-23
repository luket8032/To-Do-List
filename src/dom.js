import { tasks } from "./tasks";

const domStuff = (() => {
    const taskContainer = document.getElementById('task-container');
    const taskHeader = document.getElementById('taskHeader');
    const taskList = document.getElementById('taskList');
    const projectList = document.getElementById('projectList')

    const addTaskElement = (task) => {
        const taskElement = document.createElement('div');
        const icons = document.createElement('div');
        const check = document.createElement('input');
        const title = document.createElement('label');
        const date = document.createElement('span');
        const prio = document.createElement('span');
        const trashIcon = document.createElement('i')
        const infoIcon = document.createElement('i');
        title.textContent = task.title;
        date.textContent = `Due: ${task.dueDate}`;
        prio.textContent = task.priority;
        taskElement.classList.add('task-item');
        trashIcon.classList.add('fa', 'fa-trash-o');
        infoIcon.classList.add('fa', 'fa-info-circle');
        check.classList.add('task-check');
        title.classList.add('task-crossout');
        icons.classList.add('icons');
        prio.classList.add(task.priority)
        check.type = 'checkbox';
        check.id = 'task';
        trashIcon.id = 'delete-btn';
        infoIcon.id = 'info-btn';
        title.setAttribute('for', 'task');
        icons.append(date, prio, trashIcon, infoIcon);
        taskElement.append(check, title, icons);
        taskList.append(taskElement);
    }

    const addProjectElement = (projectName) => {
        const projectBtn = document.createElement('button')
        projectBtn.textContent = projectName;
        projectList.append(projectBtn);                                            
    }
    
    const showAllTasks = () => {
        taskHeader.textContent = 'All Tasks';
        taskList.innerHTML = ''
        tasks.allTasks.forEach(task => addTaskElement(task));
    }

    const showTodayTasks = () => {
        const todaysTasks = tasks.getTodaysTasks();
        taskHeader.textContent = `Today's Tasks`;
        taskList.innerHTML = ''
        todaysTasks.forEach(task => addTaskElement(task));
    }

    const showUpcomingTasks = () => {
        const upcomingTasks = tasks.getUpcomingTasks();
        taskHeader.textContent = 'Upcoming Tasks';
        taskList.innerHTML = ''
        upcomingTasks.forEach(task => addTaskElement(task));
    }

    const showProjects = () => {
        tasks.projects.forEach(project => {
            addProjectElement(project);
        })
    }

    return { showAllTasks, showTodayTasks, showUpcomingTasks, addTaskElement, addProjectElement, showProjects }
})();

export { domStuff }