window.addEventListener("DOMContentLoaded", function () {
  const logado = sessionStorage.getItem("logado");
  if (logado !== "true") {
    Swal.fire({
      icon: "warning",
      title: "Falha de login",
      text: "Precisa de login para acessar o jogo.",
    });
    window.location.href = "index.html";
  }
  document.getElementById("btnFacil").addEventListener("click", function () {
    localStorage.setItem("nivelJogo", 4);
    window.location.href = "jogo.html";
  });

  document.getElementById("btnMedio").addEventListener("click", function () {
    localStorage.setItem("nivelJogo", 8);
    window.location.href = "jogo.html";
  });

  document.getElementById("btnDificil").addEventListener("click", function () {
    localStorage.setItem("nivelJogo", 12);
    window.location.href = "jogo.html";
  });
});
