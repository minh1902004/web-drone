document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelector('.bars');
    const menuList = document.querySelector('.mobile--menu--container');

    bars.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });
});
