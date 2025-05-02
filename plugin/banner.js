document.addEventListener("DOMContentLoaded", () => {
  const banner = document.createElement("div");
  banner.textContent = "🚀 Unser neuer Shop ist jetzt online!";
  banner.style.backgroundColor = "#222";
  banner.style.color = "#fff";
  banner.style.padding = "15px";
  banner.style.textAlign = "center";
  banner.style.fontSize = "18px";
  banner.style.position = "fixed";
  banner.style.top = "0";
  banner.style.left = "0";
  banner.style.width = "100%";
  banner.style.zIndex = "1000";
  banner.style.boxShadow = "0 2px 5px rgba(0,0,0,0.3)";
  document.body.prepend(banner);
});
