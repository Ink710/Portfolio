document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  // Apply saved theme or default
  root.setAttribute("data-theme", savedTheme || "light");

  // Watch for nav injection
  const observer = new MutationObserver(() => {
    const toggle = document.getElementById("theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        let current = root.getAttribute("data-theme");
        let newTheme = current === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      });
      observer.disconnect(); // stop once attached
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

  