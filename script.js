// referenced: https://stackoverflow.com/questions/56980241/is-there-a-way-to-make-a-constant-dark-mode-by-using-local-storage
let mode = localStorage.getItem('mode');
const btn = document.querySelector("#btn");

if (mode === 'light') {
  lightMode();
}else {
  darkMode();
}

function darkMode() {
  btn.onclick = lightMode;
  btn.textContent = "Light Mode"
  document.body.classList.add('darkMode');
  localStorage.setItem('mode', 'dark');
  mode = localStorage.getItem('mode');
}

function lightMode() {
  btn.onclick = darkMode;
  btn.textContent = "Dark Mode"
  document.body.classList.remove('darkMode');
  localStorage.setItem('mode', 'light');
  mode = localStorage.getItem('mode');
}
