document.getElementById("headingButton").addEventListener("click", changeHeadingColor);
document.getElementById("bodyButton").addEventListener("click", changeBodyTextColor);

function changeHeadingColor() {
  var heading = document.getElementById("heading");
  var randomColor = getRandomColor();
  heading.style.color = randomColor;
}

function changeBodyTextColor() {
  var body = document.body;
  var randomColor = getRandomColor();
  body.style.color = randomColor;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}