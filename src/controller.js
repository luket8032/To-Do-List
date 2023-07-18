import { domStuff } from "./dom";

const controller = (() => {
    const menuButtons = document.querySelectorAll('#menu-btn');
    const taskContainer = document.getElementById('task-container');

    const switchPage = () => {
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
    };
    
    return { switchPage }
})();

export { controller }