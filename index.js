// Toggle dropdown menu visibility
function toggleDropdown() {
  const menu = document.getElementById("languageMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Handle language selection
function selectLanguage(language) {
  alert("Selected Language: " + language);
  document.getElementById("languageMenu").style.display = "none";

  // Add your language switching logic here
  // For example: window.location.href = `?lang=${language.toLowerCase()}`;
}

// Close dropdown if clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.lang-button')) {
    document.getElementById("languageMenu").style.display = "none";
  }
};
