document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;

      //dropdown toggle logic
      document.querySelectorAll(".dropdown").forEach(drop => {
        drop.addEventListener("click", () => {
          const menu = drop.querySelector(".dropdown-content");
          menu.style.display = menu.style.display === "block" ? "none" : "block";
        });
      });
    });
});
