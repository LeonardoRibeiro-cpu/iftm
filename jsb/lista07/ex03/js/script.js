window.addEventListener("DOMContentLoaded", function () {
  function solicitarNome() {
    return prompt("Digite seu nome completo:");
  }
  function nomeCompleto(nomeUsuario) {
    const nomeElemento = document.createElement("p");
    nomeElemento.id = "nome";
    nomeElemento.textContent = nomeUsuario;
    document.body.appendChild(nomeElemento);
    return nomeElemento;
  }
  function aumentarFonte(
    nomeElemento,
    tamanhoInicial,
    tamanhoMaximo,
    passo,
    intervaloTempo
  ) {
    let tamanhoAtual = tamanhoInicial;
    let intervaloCrescimento = setInterval(function () {
      if (tamanhoAtual < tamanhoMaximo) {
        tamanhoAtual += passo;
        nomeElemento.style.fontSize = tamanhoAtual + "px";
      } else {
        clearInterval(intervaloCrescimento);
      }
    }, intervaloTempo);
  }

  function main() {
    let nomeUsuario = solicitarNome();
    let elementoNome = nomeCompleto(nomeUsuario);
    aumentarFonte(elementoNome, 14, 40, 2, 500);
  }
  main();
});
