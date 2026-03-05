// 手機側邊選單控制
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
});

// 手機下拉選單
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", function(e) {
    e.preventDefault(); // 防止直接跳頁
    this.parentElement.classList.toggle("open");
  });
});

const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", function(e) {

    if (window.innerWidth <= 768) {
      e.preventDefault();

      const menu = this.nextElementSibling;
      menu.classList.toggle("mobile-open");
    }

  });
});

document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const menuLinks = sideMenu.querySelectorAll("a");

  // 開關選單
  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  // 點擊遮罩關閉
  overlay.addEventListener("click", closeMenu);

  // 點擊連結自動關閉
  menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  function closeMenu() {
    menuToggle.classList.remove("active");
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
  }

});