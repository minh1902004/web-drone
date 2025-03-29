document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelector('.bars');
    const menuList = document.querySelector('.menu--list');

    bars.addEventListener('click', () => {
        console.log('Bars clicked');
        menuList.classList.toggle('active');
    });
});