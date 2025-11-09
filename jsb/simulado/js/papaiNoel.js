window.addEventListener("DOMContentLoaded", function () {
  const qtd = document.getElementById("quantidade");
  const btnFalas = document.getElementById("btnFalas");
  btnFalas.addEventListener("click", falas);
  function falas() {
    let antiga = document.getElementById("saida");
    if (antiga) antiga.remove();

    let numero = parseInt(qtd.value);
    let div = document.createElement("div");
    div.id = "saida";
    let fala = "Ho Ho Ho! Feliz Natal!";

    if (isNaN(numero) || numero <= 0)
      alert("Por favor, insira um número válido maior que zero.");
    let p;
    for (let i = 1; i <= numero; i++) {
      p = document.createElement("p");
      p.textContent = fala;
      div.appendChild(p);
    }
    document.body.appendChild(div);
  }
});
