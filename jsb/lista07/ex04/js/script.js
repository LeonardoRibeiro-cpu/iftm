window.addEventListener("DOMContentLoaded", function () {
  function segundos() {
    let x = parseInt(prompt("Digite o tempo em segundos:"));
    return x;
  }
  function exibirSegundos(x) {
    let h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = `Por favor aguarde : ${x} segundos para carregar a pagina do Google`;
    return h1;
  }
  function contador(x, elemento) {
    let intervalo = setInterval(function () {
      elemento.innerText = `Por favor aguarde : ${x} segundos para carregar a pagina do Google`;
      x--;
      if (x < 0) {
        clearInterval(intervalo);
        window.location.href = "https://www.google.com";
      }
    }, 1000);
  }
  function main() {
    let tempo = segundos();
    let elemento = exibirSegundos(tempo);
    contador(tempo, elemento);
  }
  main();
});
