const logo = document.getElementById('logo');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (window.innerWidth > 768) {
        const maxTranslate = 600;
        logo.style.transform = `translateX(${Math.min(scrollPos, maxTranslate)}px)`;
    } else {
        logo.style.transform = 'none';
    }
});