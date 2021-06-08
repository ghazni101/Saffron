document.body.style.background = '#f8f9fa';
document.body.style.color = '#343a40';

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#mode");

const enableChecked2 = () => {
  darkModeToggle.checked = true;
};

const enableDarkMode = () => {
  document.body.style.background = '#343a40';
  document.body.style.color = '#f8f9fa';
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.style.background = '#f8f9fa';
  document.body.style.color = '#343a40';
  localStorage.setItem("darkMode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
  enableChecked2();
}

darkModeToggle.addEventListener("change", function () {
  darkMode = localStorage.getItem("darkMode");
  if (this.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
