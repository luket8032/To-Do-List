import { domStuff } from "./dom";
import { tasks } from "./tasks";
const allTasksBtn = document.getElementById('allTasks');
const todayTasksBtn = document.getElementById('todayTasks');
const upcomingTasksBtn = document.getElementById('upcomingTasks');
const addBtn = document.getElementById('add-icon');
const closeBtn = document.getElementById('close-icon');
const formContainer = document.getElementById('task-form');
const formBackground = document.getElementById('task-form-background');
const form = document.querySelector('.task-form form');
const newProjectBtn = document.getElementById('newProjectBtn');
const newProjectContainer = document.getElementById('projectForm');
const closeProjectBtn = document.getElementById('closeProject');
const projectForm = document.querySelector('.project-form form');
const infoPopup = document.getElementById('infoPopup')
const closeInfoBtn = document.getElementById('closeInfo')
const editPopup = document.getElementById('editPopup')
const closeEditBtn = document.getElementById('closeEdit')
const editForm = document.querySelector('.edit-popup form');
let projects = document.querySelectorAll('#project');
let selectedEdit


const controller = (() => {

    const closeForm = () => {
        formContainer.style.display = 'none';
        formBackground.style.display = 'none';
    };

    const openForm = () => {
        domStuff.listProjectOptions();
        formContainer.style.display = 'block';
        formBackground.style.display = 'block';
    };

    const openProjectForm = () => {
        newProjectContainer.style.display = 'block';
        formBackground.style.display = 'block';
    }

    const closeProjectForm = () => {
        newProjectContainer.style.display = 'none';
        formBackground.style.display = 'none';
    };

    const openInfo = () => {
        infoPopup.style.display = 'block'
        formBackground.style.display = 'block';
    };

    const closeInfo = () => {
        infoPopup.style.display = 'none';
        formBackground.style.display = 'none';
    };

    const openEdit = () => {
        editPopup.style.display = 'block'
        formBackground.style.display = 'block';
    }

    const closeEdit = () => {
        editPopup.style.display = 'none';
        formBackground.style.display = 'none';
    };

    const renderPage = (page) => {
        switch(page) {
            case "All Tasks":
                domStuff.showAllTasks();
                break
            case "Today's Tasks":
                domStuff.showTodayTasks();
                break
            case "Upcoming Tasks":
                domStuff.showUpcomingTasks();
                break
            default:
                domStuff.showTaskforProject(page.textContent);
        }
    }

    const submitForm = (submitted) => {
        const data = new FormData(submitted);
        const formData = Object.fromEntries(data);
        const create = tasks.createTask(formData.taskName, formData.taskDesc, formData.taskDate, formData.taskPrio, formData.taskProject);
        if(create === 'success') {
            const page = document.getElementById('taskHeader').textContent;
            create;
            renderPage(page)
        } else {
            window.alert('Task name already taken.');
        }
    };

    const submitProjectForm = (submitted) => {
        const data = new FormData(submitted);
        const formData = Object.fromEntries(data);
        const create = tasks.createProject(formData.projectName);
        if(create === 'success') {
            domStuff.showProjects();
            projects = document.querySelectorAll('#project');
            addProjectListeners();
        } else {
            window.alert('Project name already taken.');

        }
    }

    const submitEditForm = (submitted) => {
        const data = new FormData(submitted);
        const formData = Object.fromEntries(data);
        const page = document.getElementById('taskHeader').textContent;
        tasks.editTask(selectedEdit ,formData.taskName, formData.taskDesc, formData.taskDate, formData.taskPrio)
        renderPage(page);
    }

    const addListeners = () => {
        allTasksBtn.addEventListener('click', () => {
            domStuff.showAllTasks();
        })

        todayTasksBtn.addEventListener('click', () => {
            domStuff.showTodayTasks();
        })

        upcomingTasksBtn.addEventListener('click', () => {
            domStuff.showUpcomingTasks();
        })

        addBtn.addEventListener('click', () => {
            form.reset();
            openForm();
        });

        closeBtn.addEventListener('click', () => {
            closeForm();
        });

        closeProjectBtn.addEventListener('click', () => {
            closeProjectForm();
        });

        closeInfoBtn.addEventListener('click', () => {
            closeInfo();
        });

        closeEditBtn.addEventListener('click', () => {
            closeEdit();
        });
        
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            submitForm(form)
            closeForm();
            form.reset();
        })

        projectForm.addEventListener("submit", (e) => {
            e.preventDefault();
            submitProjectForm(projectForm)
            closeProjectForm();
            projectForm.reset();
        })

        editForm.addEventListener("submit", (e) => {
            e.preventDefault();
            submitEditForm(editForm);
            closeEdit();
            editForm.reset();
        })

        newProjectBtn.addEventListener('click', () => {
            openProjectForm();
        })

        document.addEventListener('click', (e) => {
            const targetRemove = e.target.closest('#delete-btn');
            const targetRemoveProject = e.target.closest('#deleteProject');
            const targetInfo = e.target.closest('#info-btn');
            const targetEdit = e.target.closest('#edit-btn');
            if(targetRemove) {
                const targetTitle = targetRemove.parentElement.parentElement.querySelector('.task-crossout').textContent;
                targetRemove.parentElement.parentElement.remove();
                tasks.deleteTask(targetTitle);
            } else if (targetInfo) {
                const targetTitle = targetInfo.parentElement.parentElement.querySelector('.task-crossout').textContent;
                tasks.showTaskInfo(targetTitle)
                openInfo();
            } else if (targetRemoveProject) {
                const projectName = targetRemoveProject.parentElement.textContent;
                const page = document.getElementById('taskHeader');
                targetRemoveProject.parentElement.remove();
                tasks.deleteProject(projectName);
                renderPage('All Tasks');
            } else if (targetEdit) {
                const targetTitle = targetEdit.parentElement.parentElement.querySelector('.task-crossout').textContent;
                tasks.returnTask(targetTitle);
                selectedEdit = targetTitle;
                openEdit();;
            }
        })
    };

    const addProjectListeners = () => {
        projects = document.querySelectorAll('#project');
        projects.forEach(project => {
            project.addEventListener('click', () => {
                domStuff.showTaskforProject(project.textContent);
            })
        })
    }

    return { addListeners, addProjectListeners }
})();

export { controller }