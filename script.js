setTimeout(() => {
  document.getElementById("boot-screen").style.display = "none";
  document.getElementById("os").hidden = false;
}, 2000);
setTimeout(() => {
  document.getElementById("boot-screen").style.display = "none";
  document.getElementById("app").hidden = false;
  loadHub();
}, 2500);
function bootOS() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="boot-screen">
      <h1>SUPERSTARSEARCH</h1>
      <p>Launching OS...</p>
    </div>
  `;

  setTimeout(() => {
    loadHub();
  }, 1500);
}

bootOS();

