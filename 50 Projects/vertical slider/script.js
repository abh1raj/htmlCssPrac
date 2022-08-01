const leftSlide = document.getElementById("leftSlide");
const rightSlide = document.getElementById("rightSlide");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
const sliderContainer = document.getElementById("sliderContainer");

const leftSlides = leftSlide.querySelectorAll("div");
const rightSlides = rightSlide.querySelectorAll("div");
let activeSlide = 0;

leftSlide.style.top = `-${(leftSlides.length - 1) * 100}vh`;

downBtn.addEventListener("click", () => moveSlides("down"));
upBtn.addEventListener("click", () => moveSlides("up"));

function moveSlides(direction) {
  if (direction === "up") {
    activeSlide++;

    if (activeSlide > leftSlides.length - 1) {
      activeSlide = 0;
    }
  } else if (direction === "down") {
    activeSlide--;

    if (activeSlide < 0) {
      activeSlide = leftSlides.length - 1;
    }
  }

  leftSlide.style.transform = `translateY(${
    sliderContainer.clientHeight * activeSlide
  }px)`;

  rightSlide.style.transform = `translateY(-${
    sliderContainer.clientHeight * activeSlide
  }px)`;
}
