window.addEventListener("DOMContentLoaded", function () {
  const TOTAL_CARTAS = 27;
  let memoria = document.getElementById("memoria");
  const btnVoltar = document.getElementById("btnVoltar");
  const btnReiniciar = document.getElementById("btnReiniciar");
  if (btnReiniciar) {
    btnReiniciar.addEventListener("click", function () {
      reiniciarJogo();
    });
  }
  btnVoltar.addEventListener("click", function () {
    window.location.href = "nivel.html";
  });
  const logado = localStorage.getItem("logado");
  if (logado !== "true") {
    window.location.href = "index.html";
  }

  let nivelAtual = Number(localStorage.getItem("nivelJogo"));
  if (!nivelAtual || nivelAtual <= 0) {
    Swal.fire({
      icon: "warning",
      title: "Selecione um nível!",
      text: "Escolha um nível antes de iniciar o jogo.",
    });
    window.location.href = "nivel.html";
  }

  let primeiraCarta = null;
  let segundaCarta = null;
  let bloqueiaClique = false;
  let pontos = 0;
  let tentativas = 0;
  let tempo = 0;
  let timer = null;
  let timerIniciado = false;

  const tempoPorNivel = {
    4: 60,
    8: 120,
    12: 180,
  };

  //  FUNÇÕES DO JOGO

  function gerarCartas(vetorCartas) {
    for (let i = 0; i < TOTAL_CARTAS; i++) {
      vetorCartas.push(i + 1);
    }
  }

  function aleatorias(vetorCartas, nivel) {
    let vetorPares = [];
    for (let i = 0; i < nivel; i++) {
      let index = Math.floor(Math.random() * vetorCartas.length);
      let carta = vetorCartas.splice(index, 1)[0];
      vetorPares.push(carta, carta);
    }
    return vetorPares;
  }

  function embaralha(vetorPares) {
    for (let i = vetorPares.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = vetorPares[i];
      vetorPares[i] = vetorPares[j];
      vetorPares[j] = temp;
    }
    return vetorPares;
  }

  function limparTabuleiro() {
    memoria.innerHTML = "";
  }

  function tabuleiro(vetorFinal) {
    limparTabuleiro();

    for (let i = 0; i < vetorFinal.length; i++) {
      let img = new Image();
      img.src = "img/verso.png";
      img.dataset.UrlCarta = `img/carta${vetorFinal[i]}.png`;

      img.addEventListener("click", revelarCarta);

      memoria.appendChild(img);
    }
  }

  //  TIMER

  function formatarTempo(segundos) {
    let min = Math.floor(segundos / 60);
    let seg = segundos % 60;
    if (seg < 10) seg = "0" + seg;
    return `${min}:${seg}`;
  }

  function iniciarTimer() {
    tempo = tempoPorNivel[nivelAtual];

    let div = document.getElementById("status");
    let pTempo = document.createElement("p");
    pTempo.id = "tempo";
    pTempo.textContent = `Tempo: ${formatarTempo(tempo)}`;
    div.appendChild(pTempo);

    timer = setInterval(function () {
      tempo--;
      pTempo.textContent = `Tempo: ${formatarTempo(tempo)}`;

      if (tempo <= 0) {
        clearInterval(timer);
        Swal.fire({
          icon: "error",
          title: "Tempo Esgotado!",
          text: "Você perdeu o jogo.",
          confirmButtonText: "OK",
          confirmButtonColor: "rgba(221, 51, 51, 1)",
        });
        limparTabuleiro();
      }
    }, 1000);
  }

  // STATUS

  function criarStatus() {
    let div = document.getElementById("status");
    div.innerHTML = "";

    let pPontos = document.createElement("p");
    pPontos.id = "pontos";
    pPontos.textContent = "Pontos: 0";

    let pTentativas = document.createElement("p");
    pTentativas.id = "tentativas";
    pTentativas.textContent = "Tentativas: 0";

    let pAproveitamento = document.createElement("p");
    pAproveitamento.id = "aproveitamento";
    pAproveitamento.textContent = "Aproveitamento: 0%";

    div.appendChild(pPontos);
    div.appendChild(pTentativas);
    div.appendChild(pAproveitamento);

    pontos = 0;
    tentativas = 0;
  }

  function atualizarStatus() {
    document.getElementById("pontos").textContent = `Pontos: ${pontos}`;
    document.getElementById(
      "tentativas"
    ).textContent = `Tentativas: ${tentativas}`;

    let aproveitamento = tentativas > 0 ? (pontos / tentativas) * 100 : 0;
    document.getElementById(
      "aproveitamento"
    ).textContent = `Aproveitamento: ${aproveitamento.toFixed(1)}%`;
  }

  // REVELAR E VERIFICAR CARTAS

  function revelarCarta(event) {
    if (!timerIniciado) {
      iniciarTimer();
      timerIniciado = true;
    }

    if (event.target.dataset.combinada === "true") return;
    if (bloqueiaClique) return;

    event.target.src = event.target.dataset.UrlCarta;

    if (primeiraCarta === null) {
      primeiraCarta = event.target;
    } else if (segundaCarta === null && event.target !== primeiraCarta) {
      segundaCarta = event.target;
      bloqueiaClique = true;
      setTimeout(verificaCartas, 900);
    }
  }

  function verificaCartas() {
    tentativas++;

    let img1 = primeiraCarta.dataset.UrlCarta;
    let img2 = segundaCarta.dataset.UrlCarta;

    if (img1 === img2) {
      primeiraCarta.dataset.combinada = "true";
      segundaCarta.dataset.combinada = "true";
      pontos++;

      if (pontos === nivelAtual) {
        clearInterval(timer);
        Swal.fire({
          icon: "success",
          title: "Parabéns!",
          text: "Você venceu o jogo!",
          confirmButtonColor: "rgba(40, 167, 69, 1)",
        });
      }
    } else {
      primeiraCarta.src = "img/verso.png";
      segundaCarta.src = "img/verso.png";
    }

    atualizarStatus();

    primeiraCarta = null;
    segundaCarta = null;
    bloqueiaClique = false;
  }

  function reiniciarJogo() {
    clearInterval(timer);
    timerIniciado = false;

    criarStatus();
    let vetorCartas = [];
    gerarCartas(vetorCartas);

    let vetorPares = aleatorias([...vetorCartas], nivelAtual);
    vetorPares = embaralha(vetorPares);

    tabuleiro(vetorPares);
  }
  function main() {
    clearInterval(timer);
    timerIniciado = false;

    criarStatus();

    let vetorCartas = [];
    gerarCartas(vetorCartas);

    let vetorPares = aleatorias([...vetorCartas], nivelAtual);
    vetorPares = embaralha(vetorPares);

    tabuleiro(vetorPares);
  }

  main();
});
