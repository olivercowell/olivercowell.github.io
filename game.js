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
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);
  let divBy = parseInt(document.getElementById("divBy").value);
  if (max <= min) {
    alert("WARNING: Max must be more than Min");
    return;
  }
  let containsDivisible = false;
  for (let i = min; i <= max; ++i) {
    if (i % divBy == 0) {
      containsDivisible = true;
    }
  }
  if (!containsDivisible) {
    alert("WARNING: No numbers in range are divisible");
    return;
  }
  let number = getRandomNumber(min, max, divBy);
  let element = document.getElementById("result");
  element.innerHTML = String(number);
}
