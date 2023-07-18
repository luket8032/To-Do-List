import { tasks } from './tasks';
import { menu } from './menu';
import { domStuff } from './dom';
import { controller } from './controller';
import './style.css'

const allTasks = [];

const testTask =  tasks.createTask(
    'test',
    'this is a description',
    Date(),
    'High',
    'none',
    allTasks
);

const testTask2 =  tasks.createTask(
    'test2',
    'this is a description',
    Date(),
    'High',
    'none',
    allTasks
);

const testTask3 =  tasks.createTask(
    'test2',
    'this is a description',
    Date(),
    'High',
    'none',
    allTasks
);




domStuff.showAllTasks();
controller.switchPage();
menu.toggleMenu();

console.log(allTasks)

