import { domStuff } from "./dom";

const controller = (() => {
    const menuButtons = document.querySelectorAll('#menu-btn');
    const addBtn = document.getElementById('add-icon');
    const closeBtn = document.getElementById('close-icon');
    const form = document.getElementById('task-form');
    const formBackground = document.getElementById('task-form-background')

    const addListeners = () => {
        menuButtons.forEach(button => {
            button.addEventListener('click', e => {
                switch(button.textContent) {
                    case "All Tasks":
                        domStuff.showAllTasks();
                        break
                    case "Today":
                        domStuff.showTodayTasks();
                        break
                    case "Upcoming":
                        domStuff.showUpcomingTasks();
                        break
                }
            })
        });

        addBtn.addEventListener('click', () => {
            form.style.display = 'block';
            formBackground.style.display = 'block'
        });

        closeBtn.addEventListener('click', () => {
            form.style.display = 'none';
            formBackground.style.display = 'none'
        });
    };
    
    return { addListeners }
})();

export { controller }