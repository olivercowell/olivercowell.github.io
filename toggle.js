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
