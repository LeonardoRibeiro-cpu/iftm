quantidade = parseInt(
  prompt("Digite a quantidade de pessoas que deseja inserir:")
);
vet = new Array(quantidade);

for (i = 0; i < quantidade; i++)
  vet[i] = prompt(`Digite o nome da pessoa ${i + 1}:`);

document.write("<p>Ordem de apresentação dos grupos:</p>");
for (i = 0; i < quantidade; i++) {
  indiceSorteado = Math.floor(Math.random() * vet.length);
  nomeSorteado = vet[indiceSorteado];
  vet.splice(indiceSorteado, 1);
  document.write(`<p>${i + 1}° - ${nomeSorteado}</p>`);
}
