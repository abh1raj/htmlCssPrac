const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const sizeBox = document.getElementById("size");
const dec = document.getElementById("decrease");
const inc = document.getElementById("increase");
const colorSelector = document.getElementById("color");
const clear = document.getElementById("clear");

let size = 20;
let color = colorSelector.value;
let mousePressed = false;
let x = undefined,
  y = undefined;

dec.addEventListener("click", () => {
  if (size > 1) {
    size--;
    updateSize();
  }
});

inc.addEventListener("click", () => {
  if (size < 40) {
    size++;
    updateSize();
  }
});

canvas.addEventListener("mousedown", (e) => {
  mousePressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  mousePressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (mousePressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x, y, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorSelector.addEventListener("change", () => {
  color = colorSelector.value;
});

function updateSize() {
  sizeBox.innerText = size;
}
