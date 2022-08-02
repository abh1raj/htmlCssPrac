const apiUrl = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const nameEl = document.getElementById("name");
const useridEl = document.getElementById("userid");
const followersEl = document.getElementById("followers");
const followingEl = document.getElementById("following");
const repositoriesEl = document.getElementById("repositories");
const bioEl = document.getElementById("bio");
const profileImageEl = document.getElementById("profileImage");

// getUser("abh1raj");

async function getUser(username) {
  const res = await axios(apiUrl + username);
  const data = await res.data;
  const realName = data.name;
  const userid = data.login;
  const followers = data.followers;
  const following = data.following;
  const repositories = data.public_repos;
  const bio = data.bio;
  const profileImageUrl = data.avatar_url;

  console.log(data);

  nameEl.innerText = realName;
  followersEl.innerHTML = `${followers}<strong>Followers</strong>`;
  followingEl.innerHTML = `${following}<strong>Followers</strong>`;
  repositoriesEl.innerHTML = `${repositories}<strong>Followers</strong>`;
  bioEl.innerText = bio;
  useridEl.innerText = userid;
  profileImageEl.innerHTML = `<img
  src="${profileImageUrl}"
  alt="profile picture"
/>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getUser(search.value);
  search.value = "";
});
