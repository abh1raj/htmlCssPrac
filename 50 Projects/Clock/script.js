const toggle = document.getElementById("toggle");
const htmlEl = document.querySelector("html");
const hourEl = document.getElementById("hourNeedle");
const minuteEl = document.getElementById("minuteNeedle");
const secondEl = document.getElementById("secondNeedle");
const dayMonthEl = document.getElementById("day-month");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");

toggle.addEventListener("click", (e) => {
  htmlEl.classList.toggle("dark");
  if (htmlEl.classList.contains("dark")) {
    e.target.innerText = "Light mode";
  } else {
    e.target.innerText = "Dark mode";
  }
});

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

updateClock();

setInterval((interval) => {
  updateClock();
}, 1000);

function updateClock() {
  const date = new Date();

  const hoursForClock =
    date.getHours() % 12 <= 9
      ? "0" + (date.getHours() % 12)
      : date.getHours() % 12;

  const minutesForClock =
    date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();

  const amPm = date.getHours() > 12 ? "PM" : "AM";

  timeEl.innerText = `${hoursForClock}:${minutesForClock} ${amPm}`;
  dayMonthEl.innerHTML = `${day[date.getDay()]}, ${month[date.getMonth()]}
  <span class="circle" id="date">${date.getDate()}</span>`;

  console.log(scale(date.getSeconds(), 0, 59, 0, 360));

  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    date.getSeconds(),
    0,
    59,
    0,
    360
  )}deg)`;

  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    date.getMinutes(),
    0,
    59,
    0,
    360
  )}deg)`;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
