const API_KEY = "f1451a7c640adda161b653b4199dcc41";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const LOGO = document.getElementById("logo");
const FORM = document.getElementById("form");
const SEARCH = document.getElementById("search");
const mainContent = document.getElementById("main-content");

let title = "";
let overview = "";
let rating = "";
let posterPath = "";
let ratingColor = "";

getMovieInfo(API_URL);

LOGO.addEventListener("click", () => {
  mainContent.innerHTML = "";
  getMovieInfo(API_URL);
});

async function getMovieInfo(url) {
  const response = await fetch(url);
  const data = await response.json();
  const movieData = data.results;
  console.log(movieData);
  movieData.forEach((movie) => {
    title = movie.title;
    overview = movie.overview;
    rating = movie.vote_average;
    posterPath = IMG_PATH + movie.poster_path;
    if (rating <= 4) {
      ratingColor = "red";
    } else if (rating > 4 && rating <= 7.4) {
      ratingColor = "orange";
    } else {
      ratingColor = "green";
    }
    createMovieElement(title, overview, rating, posterPath, ratingColor);
  });
}

FORM.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchItem = SEARCH.value;
  if (searchItem && searchItem != "") {
    const searchQuery = SEARCH_API + searchItem;
    SEARCH.value = "";
    mainContent.innerHTML = "";
    getMovieInfo(searchQuery);
  } else {
    window.location.reload;
  }
});

function createMovieElement(title, overview, rating, posterPath, ratingColor) {
  const movieElement = document.createElement("div");
  movieElement.classList.add("movie-container");
  movieElement.innerHTML = `<img
  src="${posterPath}"
  alt="Movie thumbnail"
  />
  <div class="movie-info">
    <h3>${title}</h3>
    <span class="${ratingColor}">${rating}</span>
  </div>
  <div class="overview">
    <h3>Overview</h3>
    ${overview}
  </div>`;
  mainContent.appendChild(movieElement);
}
