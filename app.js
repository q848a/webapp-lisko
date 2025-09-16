var opacity = 0.5;
var clickCount = 0;
var button = document.getElementById("click_me");

button.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgba(66, 66, 66, " + opacity + ")";
  opacity += 0.1;
  if (opacity > 1) {
    opacity = 0.0;
  }
  clickCount++;
  button.textContent = "Click me " + clickCount;
});
