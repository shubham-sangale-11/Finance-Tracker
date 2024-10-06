// Retrieve the saved theme from localStorage
let savedTheme = localStorage.getItem("theme");

// If no theme is saved, set a default theme
if (!savedTheme) {
  savedTheme = "light"; // Default theme, can be 'dark' if needed
}

// Apply the saved theme on page load
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

// Theme toggle logic
$(".switch-change-color input").on("switchChange.bootstrapSwitch", function () {
  // If the current theme is dark
  if (document.body.classList.contains("dark-mode")) {
    // Switch to light theme
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light"); // Save theme as 'light'
  } else {
    // Switch to dark theme
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark"); // Save theme as 'dark'
  }
});
