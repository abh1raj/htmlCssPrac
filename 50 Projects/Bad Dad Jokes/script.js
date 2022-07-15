const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

jokeBtn.addEventListener("click", generateJoke);

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  jokeContainer.innerHTML = data.joke;

  // with '.then'
  // fetch("https://icanhazdadjoke.com", config).then((res) =>
  //   res.json().then((data) => {
  //     jokeContainer.innerHTML = data.joke;
  //   })
  // );
}
