n = parseInt(prompt("Digite um número inteiro positivo:"));
m = parseInt(
  prompt("Digite outro número inteiro positivo maior que o primeiro:")
);

numeroAleatorio = Math.floor(Math.random() * (m - n + 1)) + n;

document.write("O número aleatório gerado é: " + numeroAleatorio);
