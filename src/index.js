import { tasks } from './tasks';
import { menu } from './menu';
import { domStuff } from './dom';
import { controller } from './controller';
import './style.css'

const testDate = new Date();

const testTask =  tasks.createTask(
    'Task 1',
    'this is a description',
    '2023-07-20',
    'High',
    'none'
);

const testTask2 =  tasks.createTask(
    'Task 2',
    'this is a description',
    '2023-07-21',
    'High',
    'none'
);

const testTask3 =  tasks.createTask(
    'Task 3',
    'this is a description',
    '2023-07-28',
    'High',
    'none'
);

domStuff.showAllTasks();
domStuff.showProjects();
controller.addListeners();
menu.toggleMenu();



