nota1 = parseFloat(prompt("Digite a sua nota do 1 bimestre"));
nota2 = parseFloat(prompt("Digite a sua nota do 2 bimestre"));
notaFinal = nota1 + nota2;

if (notaFinal >= 60)
  alert(`Você está aprovado com uma nota de ${notaFinal}. Parabéns`);
else
  alert(
    `Você está reprovado com ${notaFinal} pontos. Faltou ${
      60 - notaFinal
    } pontos  para ser aprovado`
  );
