window.addEventListener("DOMContentLoaded", function () {
  function qtdFuncionarios() {
    let qtd = parseInt(prompt("Digite o número de funcionários:"));
    return qtd;
  }
  function nomeFuncionarios(qtd) {
    let nomes = [];
    for (let i = 0; i < qtd; i++) {
      let nome = prompt(`Digite o nome do funcionário ${i + 1}:`);
      nomes.push(nome);
    }
    return nomes;
  }
  function exibirNomes(nomes) {
    let index = 0;
    let titulo = document.createElement("h2");
    titulo.textContent = "Nomes dos Funcionários:";
    document.body.appendChild(titulo);
    let intervalo = setInterval(function () {
      if (index < nomes.length) {
        let lista = document.createElement("p");
        lista.textContent = nomes[index];
        document.body.appendChild(lista);
        index++;
      } else {
        clearInterval(intervalo);
      }
    }, 1000);
  }
  function main() {
    let qtd = qtdFuncionarios();
    let nomes = nomeFuncionarios(qtd);
    exibirNomes(nomes);
  }
  main();
});
