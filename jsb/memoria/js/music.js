window.addEventListener("DOMContentLoaded", function () {
  const musica = document.getElementById("musicaFundo");
  const btnSom = document.getElementById("btnSom");
  musica.volume = 0.1;
  document.body.addEventListener(
    "click",
    () => {
      if (musica.muted) {
        musica.muted = false;
        musica.play();
      }
    },
    { once: true }
  );
  btnSom.addEventListener("click", () => {
    if (musica.muted) {
      musica.muted = false;
      btnSom.textContent = "🔊";
    } else {
      musica.muted = true;
      btnSom.textContent = "🔇";
    }
  });
  document.querySelectorAll("button, input[type='button']").forEach((btn) => {
    btn.addEventListener("click", () => {
      const som = document.getElementById("somClick");
      som.currentTime = 0;
      som.volume = 1.0;
      som.play();
    });
  });
});
