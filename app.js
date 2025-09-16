var opacity = 0.5;
document.getElementById("click_me").addEventListener("click", function () {
  document.body.style.backgroundColor = "rgba(66, 66, 66, " + opacity + ")";
  opacity += 0.1;
  if (opacity > 1) {
    opacity = 0.0;
  }
});
