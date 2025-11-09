window.addEventListener("DOMContentLoaded", function () {
  const btnEnviar = document.getElementById("btnEnviar");
  const caixaTexto = document.getElementById("text");

  btnEnviar.addEventListener("click", enviar);

  function enviar() {
    const texto = caixaTexto.value;
    localStorage.setItem("mensagem", texto);
    if (texto.trim() === "")
      alert("Por favor, insira uma mensagem antes de enviar.");
    else window.location.href = "pagina02.html";
  }
});
