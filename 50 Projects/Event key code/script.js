const container = document.getElementById("container");

window.addEventListener("keydown", (event) => {
  console.log(event);

  container.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key}
  <small>event.key</small>
  </div>

  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
  </br>
  <div class="key">
    Press another key
  </div>`;
});
