const smallCups = document.querySelectorAll(".cup-small");
const remained = document.getElementById("remained");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");

updateBigCup();

smallCups.forEach((cup, SmCupIndex) => {
  cup.addEventListener("click", () => fillSmallCup(SmCupIndex));
});

function fillSmallCup(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }

  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const totalCups = smallCups.length;
  const fullCups = document.querySelectorAll(".cup-small.full").length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
    liters.innerText = "2L";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 500}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    liters.innerText = `${(2000 - 250 * fullCups) / 1000}L`;
  }
  if (fullCups == totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    remained.style.height = "auto";
  }
}
