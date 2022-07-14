const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  fetch("https://icanhazdadjoke.com", config).then((res) =>
    res.json().then((data) => {
      jokeContainer.innerHTML = data.joke;
    })
  );
}
