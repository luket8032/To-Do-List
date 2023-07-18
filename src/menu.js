const menu = (() => {
    const menu = document.getElementById('menu');
    
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

    return { closeMenu, openMenu }
})();

export { menu }