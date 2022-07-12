const buttonsDiv = document.getElementById("buttonsDiv");

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  let soundElement = document.createElement("button");
  soundElement.innerText = sound;
  soundElement.classList.add("btn");
  buttonsDiv.appendChild(soundElement);

  soundElement.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });
});

function stopSound() {
  sounds.forEach((sound) => {
    let currSound = document.getElementById(sound);
    currSound.pause();
    currSound.currentTime = 0;
  });
}
