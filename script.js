const workList = document.querySelector(".work-list");
const iso = new Isotope(workList, {
  itemSelector: ".work-item",
  layoutMode: "fitRows",
  fitRows: {
    gutter: 32,
  },
 
});
const filterButtons = document.querySelectorAll(".filter-buttons button");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.dataset.filter;
    iso.arrange({
      filter: filterValue,
    });
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  });
});
const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");
const closeButton = document.querySelector(".close-button");

menuButton.addEventListener("click", () => {
  menuOverlay.classList.add("is-open");
});
closeButton.addEventListener("click", () => {
  menuOverlay.classList.remove("is-open");
});
const menuLinks = document.querySelectorAll(".menu-nav a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuOverlay.classList.remove("is-open");
  });
});
