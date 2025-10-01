candidato = [
  { nome: "Mickey", votos: 0 },
  { nome: "Minnie", votos: 0 },
  { nome: "Pluto", votos: 0 },
  { nome: "Pateta", votos: 0 },
];

function CandidatoMaisVotado() {
  indice = 0;
  for (i = 1; i < candidato.length; i++) {
    if (candidato[i].votos > candidato[indice].votos) {
      indice = i;
    }
  }
  return indice;
}

function atualizarClasseLider() {
  indiceLider = CandidatoMaisVotado(); // corrigido
  for (i = 0; i < candidato.length; i++) {
    ele = document.getElementById(`candidato${i + 1}`);
    if (i === indiceLider) {
      ele.classList.add("lider");
    } else {
      ele.classList.remove("lider");
    }
  }
}

function cliqueCandidato(indice) {
  votosP = document.getElementById(`votos${indice + 1}`);
  candidato[indice].votos++;
  votosP.innerHTML = `Numero de Votos: <span class="color">${candidato[indice].votos}</span>`;
  atualizarClasseLider();
}

function adicionarEvento(indice) {
  document
    .getElementById(`img${indice + 1}`)
    .addEventListener("click", function () {
      cliqueCandidato(indice);
    });
}

for (i = 0; i < candidato.length; i++) {
  adicionarEvento(i);
}
