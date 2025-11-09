window.addEventListener("DOMContentLoaded", function () {
  const mensagem = document.getElementById("mensagem");
  let armazena = (mensagem.textContent = localStorage.getItem("mensagem"));
  const btnAnalisar = document.getElementById("btnAnalisar");
  const btnPapaiNoel = document.getElementById("btnPapaiNoel");
  btnAnalisar.addEventListener("click", analisarResposta);
  btnPapaiNoel.addEventListener("click", papaiNoel);
  function analisarResposta() {
    let selecione = document.getElementById("selecione");
    const novoTexto = document.getElementById("novoTexto");

    if (selecione.selectedIndex === 0) {
      palavras = armazena.split(" ");
      quantidaPalavras();
      inicialM();
      primeiraPalavra();
      segundaPalavra();
      ultimaPalavra();
    } else {
      if (novoTexto.value.trim() === "") {
        alert("Por favor, insira um novo texto para análise.");
      }
      armazena = novoTexto.value;
      quantidaPalavras();
      inicialM();
      primeiraPalavra();
      segundaPalavra();
      ultimaPalavra();
    }
  }
  function quantidaPalavras() {
    const qtdePalavras = document.getElementById("qtd");
    qtdePalavras.textContent = armazena.trim().split(" ").length;
    return qtdePalavras;
  }
  function inicialM() {
    let palavrasM = document.getElementById("palavrasM");
    let palavras = armazena.split(" ");
    const filtradas = [];
    const letra = "M";
    for (let i = 0; i < palavras.length; i++) {
      const palavra = palavras[i];
      const primeira = palavra.charAt(0);
      if (primeira === "M" || primeira === "m") {
        filtradas.push(palavra);
      }
    }
    palavrasM.value = filtradas.join(" ");
    return palavrasM;
  }
  function primeiraPalavra() {
    let primeiraP = document.getElementById("primeiraPalavra");
    let palavras = armazena.split(" ");
    primeiraP.value = palavras[0];
    return primeiraP;
  }
  function segundaPalavra() {
    let segundaP = document.getElementById("segundaPalavra");
    let palavras = armazena.split(" ");
    segundaP.value = palavras[1];
    return segundaP;
  }
  function ultimaPalavra() {
    let ultimaP = document.getElementById("ultimaPalavra");
    let palavras = armazena.split(" ");
    ultimaP.value = palavras[palavras.length - 1];
    return ultimaP;
  }
  function papaiNoel() {
    window.location.href = "papaiNoel.html";
  }
});
