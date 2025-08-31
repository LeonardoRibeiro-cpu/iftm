valor1 = parseFloat(prompt("Digite o primeiro numero que vai de 0 a 255"));
valor2 = parseFloat(prompt("Digite o segundo numero que vai de 0 a 255"));
valor3 = parseFloat(prompt("Digite o terceiro numero que vai de 0 a 255"));

document.write(
  `<p style = "color: rgb(${valor1},${valor2},${valor3});">Fundamentos de Web Design II</p>`
);
