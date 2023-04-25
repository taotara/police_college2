// Change Theme
let darkMode = localStorage.getItem('darkMode');
const themeToggler = document.querySelector('.theme-toggler');

const enableDarkMode = () => {
  document.body.classList.add('dark-theme-variables');

  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark-theme-variables');

  localStorage.setItem('darkMode', 'null');
};

if (darkMode === 'enabled') {
  enableDarkMode();
}

themeToggler.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }

  themeToggler.querySelector('i:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('i:nth-child(2)').classList.toggle('active');
});