

const togglebg = document.getElementById("toggle-btn");
const imageToggle = document.getElementById("imageToggle");
const toDo = document.getElementById("to-do");
console.log(toDo.value);



togglebg.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle image source based on dark mode state
  const isDarkMode = document.body.classList.contains("dark-mode");
  if (isDarkMode) {
      imageToggle.src = "./images/bg-desktop-dark.jpg"; // Update with your dark mode image path
      togglebg.src = "./images/icon-sun.svg";
  } else {
      imageToggle.src = "./images/bg-desktop-light.jpg"; // Update with your light mode image path
      togglebg.src = "./images/icon-moon.svg";
  }
})

toDo.addEventListener("change", () => {
  console.log(toDo.value);
})