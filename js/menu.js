export function initMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
}