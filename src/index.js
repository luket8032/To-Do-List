import './style.css'

const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menuBtn')

function closeMenu() {
    menu.style.width = "0%";
    menu.style.padding = "0px";
    menuBtn.dataset.state = "close";
};

function openMenu () {
    menu.style.width = "20%";
    menu.style.padding = "16px";
    menuBtn.dataset.state = "open";
};

menuBtn.addEventListener('click', () => {
    switch(menuBtn.dataset.state) {
        case "open":
            closeMenu();
            break
        case "close":
            openMenu();
            break
    }
});

