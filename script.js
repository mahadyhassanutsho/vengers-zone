const slides = document.querySelectorAll(".hero-slider img");
const timeInBetweenSlide = 3000;
let slideIndex = 0;

const showSlide = (index) =>
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

showSlide(slideIndex);

setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, timeInBetweenSlide);
