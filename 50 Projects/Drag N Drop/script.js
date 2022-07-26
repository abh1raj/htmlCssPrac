const emptyBoxes = document.querySelectorAll(".empty");
const filledBox = document.querySelector(".fill");

filledBox.addEventListener("dragstart", dragStart);
filledBox.addEventListener("dragend", dragEnd);

function dragStart() {
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
  console.log("drag end");
}

emptyBoxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  this.className += " hovered";
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  this.append(filledBox);
}
