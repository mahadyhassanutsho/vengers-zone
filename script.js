const slides = document.querySelectorAll(".hero-slider img");
const loaderContainer = document.querySelector(".loader-container");
const pageContent = document.querySelector(".page-content");
const timeInBetweenSlide = 3000;
let slideIndex = 0;

window.addEventListener("load", () => {
  loaderContainer.classList.add("hidden");
  pageContent.classList.add("visible");
});

const showSlide = (index) =>
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

showSlide(slideIndex);

setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, timeInBetweenSlide);
