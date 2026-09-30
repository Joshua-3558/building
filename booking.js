 window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling Down
        scrollButtons.classList.add('visible');
    } else {
        // Scrolling Up
        scrollButtons.classList.remove('visible');
    }
     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);
let lastScrollTop = 0;
const floatingButtons =
document.querySelector('.floating-buttons');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset ||
    document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling Down -> Show buttons
        floatingButtons.classList.add('visible');
    } else {
        // Scrolling Up -> Hide buttons
        floatingButtons.classList.remove('visible');
    }

    // Update the last scroll position, ensuring it's never negative
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

function toggleMenu() {
    const menuToggle =
    document.querySelector('.js-menu-toggle');
    const mainNav =
    document.querySelector('.js-main-nav');

    menuToggle.classList.toggle('is-open');
    mainNav.classList.toggle('is-open');
}

document.querySelector('.js-menu-toggle').addEventListener('click',
    toggleMenu);