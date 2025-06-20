
document.addEventListener("DOMContentLoaded", () => {
  const dateTime = document.getElementById("dateTime");
  const updateClock = () => {
    const now = new Date();
    const options = { dateStyle: 'medium', timeStyle: 'short' };
    dateTime.textContent = now.toLocaleString(undefined, options);
  };
  updateClock();
  setInterval(updateClock, 60000);
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    includedLanguages: 'en,zh-CN,es,fr,de,ar,pt,ru',
    autoDisplay: false
  }, 'google_translate_element');
}

particlesJS.load('particles-js', 'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js@master/demo/particles.json');

const sections = document.querySelectorAll('section');
let currentIndex = 0;

function showSectionByIndex(index) {
  sections.forEach((s, i) => s.classList.toggle('active', i === index));
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % sections.length;
    showSectionByIndex(currentIndex);
  } else if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    showSectionByIndex(currentIndex);
  }
});

document.getElementById('nextArrow').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sections.length;
  showSectionByIndex(currentIndex);
});
