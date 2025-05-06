document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggle");

  // Beim Laden gespeicherten Modus wiederherstellen
  const saved = localStorage.getItem("mode");
  if (saved === "dark") {
    document.body.classList.add("dark");
    button.textContent = "☀️ Light Mode";
  }

  // Toggle-Button klickbar machen
  button.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    // Text im Button ändern
    if (document.body.classList.contains("dark")) {
      button.textContent = "☀️ Light Mode";
    } else {
      button.textContent = "🌙 Dark Mode";
    }

    // speichern im localStorage
    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("mode", mode);
  });
});
