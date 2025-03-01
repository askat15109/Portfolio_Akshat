const typingElement = document.querySelector('.typing');
const words = [ "Tech Enthusiast","Data Scientist"];
let wordIndex = 0, charIndex = 0;

function type() {
    if (charIndex < words[wordIndex].length) {
        typingElement.textContent += words[wordIndex][charIndex++];
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = words[wordIndex].substring(0, --charIndex);
        setTimeout(erase, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

document.querySelector('.theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-mode');
    const root = document.documentElement.style;
    if (document.body.classList.contains('dark-mode')) {
        root.setProperty('--bg-color', '#121212');
        root.setProperty('--text-color', '#fff');
        document.querySelector('.theme-toggle').textContent = '☀️';
    } else {
        root.removeProperty('--bg-color');
        root.removeProperty('--text-color');
        document.querySelector('.theme-toggle').textContent = '🌙';
    }
};
function animateSkillBars() {
    const skillsSection = document.querySelector('#skills');
    const skillBars = document.querySelectorAll('.skill-bar');

    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollTop + windowHeight > sectionTop + sectionHeight / 3) {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.setProperty('--progress', `${progress}%`);
            bar.style.setProperty('width', `${progress}%`);
        });
    }
}

document.addEventListener('scroll', animateSkillBars);
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
