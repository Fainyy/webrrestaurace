window.addEventListener('scroll', function () {
    const hero = document.getElementById('hero');
    hero.style.backgroundPositionY = window.scrollY * 0.5 + 'px';
});
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        toggle.textContent = '☀️';
    } else {
        toggle.textContent = '🌙'
    }
});