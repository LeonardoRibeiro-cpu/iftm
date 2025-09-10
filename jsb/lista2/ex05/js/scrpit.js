qtd = parseInt(prompt("Quantos passageiros?"));
nomes = [];
idades = [];
soma = 0;

for (i = 0; i < qtd; i++) {
  nome = prompt("Digite o nome do passageiro " + (i + 1));
  idade = parseInt(prompt("Digite a idade de " + nome));

  nomes[i] = nome;
  idades[i] = idade;

  soma += idade;
}

media = soma / qtd;
document.write(`<p>Média das idades: ${media} anos</p> <br>`);

indiceAleatorio = Math.floor(Math.random() * qtd);
vencedor = nomes[indiceAleatorio];
document.write(`Vencedor do almoço: ${vencedor}`);


