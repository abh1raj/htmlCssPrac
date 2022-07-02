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

// classes:

class car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let d = new Date();
    d = d.getFullYear();
    return d - this.year;
  }
}

let myCar = new car("Indica Vista", 2010);
document.getElementById("car-age").innerHTML = `Car: ${
  myCar.name
}, car's age: ${myCar.age()}`;
