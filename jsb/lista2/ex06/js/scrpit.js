vet = [];
for (i = 1; i <= 60; i++) vet[i - 1] = i;

document.write("<p>Números sorteados:</p>");
for (i = 0; i < 6; i++) {
  numeroSorteado = Math.floor(Math.random() * vet.length);
  vet[numeroSorteado];
  document.write(`<p>${vet[numeroSorteado]}</p>`);
  vet.splice(numeroSorteado, 1);
}
