btn = document.getElementById("btnResultado");
txt1 = document.getElementById("txtName1");
txt2 = document.getElementById("txtName2");

btn.addEventListener("click", exibir);

function exibir() {
  if (txt1.value.trim() == "" || txt2.value.trim() == "")
    alert("informe um numero");
  else if (isNaN(txt1.value) || isNaN(txt2.value))
    alert("Invalido! digite apenas numeros");
  else {
    soma = parseFloat(txt1.value) + parseFloat(txt2.value);
    media = soma / 2;
    if (media < 60) alert(`Reprovado faltou ${60 - media} pontos`);
    else alert(`Aprovado com ${media} pontos`);
  }
}
