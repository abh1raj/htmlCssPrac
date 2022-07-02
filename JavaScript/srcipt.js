function showTime() {
  document.getElementById("current-time").innerHTML = "The time is: " + Date();
}

let firstName = "Abriraj";
let lastName = "Singh";

let fullname = `Name: ${firstName} ${lastName}`;

document.getElementById("string-backtick").innerHTML = fullname;

function toCelsius() {
  let fahrenheit = document.getElementById("fahrenheit").value;
  let resultCelsius = (5 / 9) * (fahrenheit - 32);
  document.getElementById("celcius-result").innerHTML = resultCelsius;
}
