const header = document.getElementById("header");
const excerpt = document.getElementById("excerpt");
const title = document.getElementById("title");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const dateEl = document.getElementById("date");
const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(() => {
  uploadData();
}, 2500);

function uploadData() {
  animatedBgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animatedBgTexts.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });

  header.innerHTML = `<img
  src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  alt=""
  />`;
  title.innerText = `Lorem ipsum dolor sit amet.`;
  excerpt.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
  dolorem!`;
  profile_img.innerHTML = `<img
  src="https://randomuser.me/api/portraits/women/10.jpg"
  alt="Profile picture"
  />`;
  name.innerHTML = "Some girl";
  dateEl.innerHTML = "Jan 04 2022";
}
