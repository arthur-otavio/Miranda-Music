const logo = document.getElementById('logo');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    logo.style.transform = `translateX(${Math.min(scrollPos, 600)}px)`;
});