import { domStuff } from "./dom";
import { tasks } from "./tasks";
const menuButtons = document.querySelectorAll('#menu-btn');
const addBtn = document.getElementById('add-icon');
const closeBtn = document.getElementById('close-icon');
const formContainer = document.getElementById('task-form');
const formBackground = document.getElementById('task-form-background')
const form = document.querySelector('.task-form form');

const controller = (() => {

    const closeForm = () => {
        formContainer.style.display = 'none';
        formBackground.style.display = 'none';
    }

    const openForm = () => {
        formContainer.style.display = 'block';
        formBackground.style.display = 'block';
    }

    const submitForm = (submitted) => {
        const data = new FormData(submitted);
        const formData = Object.fromEntries(data);
        const create = tasks.createTask(formData.taskName, formData.taskDesc, formData.taskDate, formData.taskPrio, formData.taskProject);
        if(create === 'success') {
            create;
            domStuff.addTaskElement(tasks.allTasks.slice(-1)[0]);
        } else {
            window.alert('Task name already taken.');
        }
        
    }

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
            openForm();
        });

        closeBtn.addEventListener('click', () => {
            closeForm();
        });
        
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm(form)
            closeForm();
            form.reset();
        })

        document.addEventListener('click', (e) => {
            const targetRemove = e.target.closest('#delete-btn');
            const targetInfo = e.target.closest('#info-btn');
            if(targetRemove) {
                const targetTitle = targetRemove.parentElement.parentElement.querySelector('.task-crossout').textContent;
                targetRemove.parentElement.parentElement.remove()
                tasks.deleteTask(targetTitle);
                console.log(tasks.allTasks)
            } else if (targetInfo) {
                console.log('showing task info');
            }
        })
    };
    return { addListeners }
})();

export { controller }