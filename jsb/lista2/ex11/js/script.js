cartas = new Array(27);
for (i = 1; i <= 27; i++) cartas[i - 1] = i;

document.write(`<h1 style="text-align:center;">JOGUE TRUCO</h1>`);
document.write(`<p style="text-align:center; color:red;">Cartas Sorteadas</p>`);
for (i = 1; i <= 4; i++) {
  document.write(`<h2>Jogador ${i} = </h2>`);
  for (j = 0; j < 3; j++) {
    indice = Math.floor(Math.random() * cartas.length);
    carta = cartas[indice];
    cartas.splice(indice, 1);
    document.write(`<img src="img/carta${carta}.png">`);
  }
  document.write("<br>");
}
