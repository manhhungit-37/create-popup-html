const displayPopup = document.getElementById("display-popup");
const closeBtn = document.getElementById("close-btn");
const popUp = document.getElementById("popup");
const overlay = document.getElementById("overlay");

displayPopup.addEventListener("click", function() {
  overlay.classList.add("scale-1");
  popUp.classList.add("popup-scale");
})

closeBtn.addEventListener("click", function() {
  popUp.classList.remove("popup-scale")
  overlay.classList.remove("scale-1");
})
