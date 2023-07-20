import { tasks } from './tasks';
import { menu } from './menu';
import { domStuff } from './dom';
import { controller } from './controller';
import './style.css'

const allTasks = [];

const testTask =  tasks.createTask(
    'Task 1',
    'this is a description',
    Date(),
    'High',
    'none',
    allTasks
);

const testTask2 =  tasks.createTask(
    'Task 2',
    'this is a description',
    Date(),
    'High',
    'none',
    allTasks
);

domStuff.showAllTasks();
controller.addListeners();
menu.toggleMenu();


