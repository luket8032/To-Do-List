import { tasks } from './tasks';
import { menu } from './menu';
import { domStuff } from './dom';
import { controller } from './controller';
import './style.css'
import './check.css'

const allTasks = [];

const testTask =  tasks.createTask(
    'task 1',
    'this is a description',
    Date(),
    'High',
    'none',
    allTasks
);

const testTask2 =  tasks.createTask(
    'task 2',
    'this is a description',
    Date(),
    'High',
    'none',
    allTasks
);

domStuff.showAllTasks();
controller.switchPage(allTasks);
menu.toggleMenu();


