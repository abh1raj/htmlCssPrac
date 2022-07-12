const labels = document.querySelectorAll(".form-control label");
const inputs = document.querySelectorAll(".form-control input");
const formControl = document.querySelectorAll(".form-control");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style = "transition-delay:${index * 20}ms">${letter}</span>`
    )
    .join("");
});
