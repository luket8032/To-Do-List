const menu = (() => {
    const menu = document.getElementById('menu');
    
    function closeMenu() {
        menu.style.width = "0%";
        menu.style.padding = "0px";
        menuToggle.dataset.state = "close";
    };
    
    function openMenu () {
        menu.style.width = "20%";
        menu.style.padding = "16px";
        menuToggle.dataset.state = "open";
    };

    const toggleMenu = () => {
        const menuToggle = document.getElementById('menuToggle');
        menuToggle.addEventListener('click', () => {
            switch(menuToggle.dataset.state) {
                case "open":
                    closeMenu();
                    break
                case "close":
                    openMenu();
                    break
            }
        });
    }

    return { toggleMenu }
})();

export { menu }