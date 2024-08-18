document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("theme-toggle-btn");
  const toggleIcon = document.getElementById("toggle-icon");
  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleIcon.textContent = "🌙";
  } else {
    toggleIcon.textContent = "☀️";
  }

  themeToggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    let theme = "light";
    if (document.body.classList.contains("dark-mode")) {
      theme = "dark";
      toggleIcon.textContent = "🌙";
    } else {
      toggleIcon.textContent = "☀️";
    }
    localStorage.setItem("theme", theme);
  });
});

// document.getElementById("toggleMode").addEventListener("click", function () {
//   document.body.classList.toggle("dark-mode");
// });

document.getElementById("backButton").addEventListener("click", function () {
  window.location.href = "index.html";
});

function goToIndex() {
  window.location.href = "index.html";
}