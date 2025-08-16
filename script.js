const slides = document.querySelectorAll(".hero-slider img");
const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector(".page-content");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".main-nav .nav-list");
const navLinks = document.querySelectorAll(".main-nav .nav-list a.nav-link");

const timeInBetweenSlide = 3000;
let slideIndex = 0;

window.addEventListener("load", () => {
  loaderContainer.classList.add("hidden");
  pageContent.classList.add("visible");
});

hamburger.addEventListener("click", () => {
  navList.classList.toggle("visible");
  hamburger.classList.toggle("active");
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    navList.classList.toggle("visible");
    hamburger.classList.toggle("active");
  })
);

const showSlide = (index) =>
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

showSlide(slideIndex);

setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, timeInBetweenSlide);
