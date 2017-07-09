
    setInterval(getRandomColour, 2000)

var colours = ["green", "blue", "yellow", "pink", "orange"];
function getRandomColour() {

  var random = Math.floor(Math.random() * colours.length);
  var container = document.getElementById("container");
  container.className = colours[random];
}
