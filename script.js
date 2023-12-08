let element = document.getElementById("toggle");
element.style.display = "block";

function toggleElement() {
  let element = document.getElementById("toggle");
  if (element.style.display == "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}

function throwDice() {
  let result = Math.floor(Math.random() * 7);
  return result;
}

function getRandomNumber(min, max, divisibleBy) {
  do {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (result % divisibleBy != 0);
  return result;
}

function displayRandomNumber() {
  let number = getRandomNumber(6, 10, 2);
  let element = document.getElementById("result");
  element.innerHTML = String(number);
}
