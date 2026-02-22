window.addEventListener("DOMContentLoaded", () => {
  const idades = [10, 21, 32, 53, 64, 75, 86, 97, 108, 119, 120];

  const soma = (idades) => idades.reduce((acc, idades) => acc + idades, 0);
  document.getElementById("a").textContent = `Soma: ${soma(idades)}`;

  const media = (idades) => soma(idades) / idades.length;
  document.getElementById("b").textContent = `Média: ${media(idades)}`;

  const maior = (idades) => Math.max(...idades);
  document.getElementById("c").textContent = `Maior idade: ${maior(idades)}`;

  const impares = (idades) => idades.filter((n) => n % 2 !== 0);
  document.getElementById("d").textContent =
    `Ímpares: ${impares(idades).join(", ")}`;

  const todosMaior = (idades) => idades.every((n) => n >= 18);
  document.getElementById("e").textContent =
    `Todos maiores de idade: ${todosMaior(idades)}`;

  const valor = parseInt(prompt("Digite uma idade para comparação"));

  const todosValor = (idades) => idades.every((n) => n >= valor);
  document.getElementById("f").textContent =
    `Todos >= ${valor}: ${todosValor(idades)}`;

  const maiores = (idades) => idades.filter((n) => n >= valor);
  document.getElementById("g").textContent =
    `Idades >= ${valor}: ${maiores(idades).join(", ")}`;

  const mediaMaiores = (idades) => {
    const lista = maiores(idades);
    return lista.reduce((acc, n) => acc + n, 0) / lista.length;
  };
  document.getElementById("h").textContent =
    `Média >= ${valor}: ${mediaMaiores(idades)}`;
});
