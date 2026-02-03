setTimeout(() => {
  document.getElementById("boot-screen").style.display = "none";
  document.getElementById("os").hidden = false;
}, 2000);
setTimeout(() => {
  document.getElementById("boot-screen").style.display = "none";
  document.getElementById("app").hidden = false;
  loadHub();
}, 2500);

