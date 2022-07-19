const tagsEl = document.getElementById("tags");
const inputEl = document.getElementById("textarea");

inputEl.addEventListener("keyup", (input) => {
  if (input.key == "Enter") {
    setTimeout(() => {
      input.target.value = "";
    }, 10);

    const times = 30;

    const interval = setInterval(() => {
      const randomTag = selectRandomTag();
      highlightTag(randomTag);

      setTimeout(() => {
        unhighlightTag(randomTag);
      }, 100);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);

      setTimeout(() => {
        const finalTag = selectRandomTag();
        highlightTag(finalTag);
      }, 100);
    }, times * 100);
  }

  createTags(input.target.value);
});

//random tag selector

function selectRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

//highlight the random tag

function highlightTag(tag) {
  tag.classList.add("highlight");
}

//unhighlight the random tag

function unhighlightTag(tag) {
  tag.classList.remove("highlight");
}

function createTags(input) {
  const tags = input
    .split(",")
    .filter((input) => input.trim() != "")
    .map((input) => input.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEL = document.createElement("span");
    tagEL.classList.add("tag");
    tagEL.innerText = tag;
    tagsEl.appendChild(tagEL);
  });
}
