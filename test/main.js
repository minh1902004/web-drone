document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelector('.bars');
    const menuList = document.querySelector('.mobile--menu--container');

    bars.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!menuList.contains(event.target) && !bars.contains(event.target)) {
            menuList.classList.remove('active');
        }
    });
});
