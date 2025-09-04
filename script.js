//1
document.getElementById("red").textContent = "Adiós";
//2
document.getElementById("cambiarColor").style.color = "orange";
//3
document.getElementById("clickable").addEventListener("click", function() {
  this.style.color = "brown";
});
