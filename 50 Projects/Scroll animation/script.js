// console.log(window.innerHeight);

const boxes = document.querySelectorAll(".box");
showBox();
window.addEventListener("scroll", showBox);

function showBox() {
  let windowHeight = window.innerHeight - 300;
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    console.log(windowHeight, boxTop);
    if (boxTop < windowHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
