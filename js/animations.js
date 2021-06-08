let anims = localStorage.getItem("anims");
const animationToggle = document.querySelector("#animation");
const particles = document.querySelector("#particles-js");

const enableChecked1 = () => {
  animationToggle.checked = true;
};

const enableAnimations = () => {
  particles.style.display = 'block';
  localStorage.setItem("anims", "enabled");
};

const disableAnimations = () => {
  particles.style.display = 'none';
  localStorage.setItem("anims", "disabled");
};

if (anims === "enabled") {
  enableAnimations();
  enableChecked1();
}

animationToggle.addEventListener("change", function () {
  anims = localStorage.getItem("anims");
  if (this.checked) {
    enableAnimations();
  } else {
    disableAnimations();
  }
});
