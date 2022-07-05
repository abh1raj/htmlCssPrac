const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let interval = setInterval(blur, 12);

let loadPercentage = 0;

function blur() {
  loadPercentage++;

  if (loadPercentage == 100) {
    bg.style.opacity = 0;
    loadingText.style.display = "none";
  }

  if (loadPercentage == 115) {
    bg.style.display = "none";
    clearInterval(interval);
  }

  // console.log(loadPercentage);

  bg.style.filter = `blur(${scale(loadPercentage, 0, 100, 30, 0)}px)`;
  loadingText.style.opacity = scale(loadPercentage, 0, 100, 1, 0);
  loadingText.innerText = `${loadPercentage}%`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
