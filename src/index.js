import { tasks } from './tasks';
import { menu } from './menu';
import './style.css'

const allTasks = [];
const menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', () => {
    switch(menuBtn.dataset.state) {
        case "open":
            menu.closeMenu();
            break
        case "close":
            menu.openMenu();
            break
    }
});


const testTask =  tasks.createTask(
    'test',
    'this is a description',
    Date(),
    'High',
    'none',
    allTasks
);
console.log(testTask)
