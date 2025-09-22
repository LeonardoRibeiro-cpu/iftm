btn = document.getElementById("btnResultado");
txt1 = document.getElementById("txtName1");
txt2 = document.getElementById("txtName2");

btn.addEventListener("click", exibir);

function exibir() {
  if (txt1.value.trim() == "" || txt2.value.trim() == "")
    alert("informe um numero");
  else if (isNaN(txt1.value) || isNaN(txt2.value))
    alert("Invalido! digite apenas numeros");
  else if (txt1.value > 50 || txt2.value > 50)
    alert("Numero Invalido! Digite apenas numeros de 0 a 50");
  else {
    soma = parseFloat(txt1.value) + parseFloat(txt2.value);
    if (soma < 60) alert(`Reprovado faltou ${60 - soma} pontos`);
    else alert(`Aprovado com ${soma} pontos`);
  }
}
