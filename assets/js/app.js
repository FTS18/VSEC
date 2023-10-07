function toggleMenu() {
  var menu = document.querySelector('.menu-list');
  menu.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const sidebarContainer = document.querySelector(".sidebar");
  fetch("../assets/components/sidebar.html")
    .then(response => response.text())
    .then(content => {
      sidebarContainer.innerHTML = content;
    })
    .catch(error => {
      console.error("Error fetching sidebar content:", error);
    });
  const headerContainer = document.querySelector("header .nav-container");
  fetch("../assets/components/navbar.html")
    .then(response => response.text())
    .then(content => {
      headerContainer.insertAdjacentHTML("beforeend", content);
    })
    .catch(error => {
      console.error("Error fetching navbar content:", error);
    });
  const currentYear = new Date().getFullYear();
  const footer = document.getElementById('copyright');
  footer.textContent = `Copyright © ${currentYear}, Ananay Dubey`;
  gsap.to(".barr", 1.15, {
    delay: 0.35,
    height: 0,
    stagger: {
      amount: 0.4,
    }, ease: "power1.inOut",
  })
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");
    const currentTheme = body.classList.contains("dark-theme") ? "Light" : "Dark";
    themeToggle.textContent = currentTheme;
  });
  var lazyImages = document.querySelectorAll("img[loading='lazy']");

  lazyImages.forEach(function (img) {
    img.addEventListener("load", function () {
      img.removeAttribute("loading");
    });
  });
});