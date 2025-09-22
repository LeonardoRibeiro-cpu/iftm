valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");
resul = document.getElementById("txtResultado");
mais = document.getElementById("btnMais");
menos = document.getElementById("btnMenos");
vezes = document.getElementById("btnVezes");
divisao = document.getElementById("btnDivisao");

mais.addEventListener("click", exibir);
menos.addEventListener("click", exibir);
vezes.addEventListener("click", exibir);
divisao.addEventListener("click", exibir);

function exibir(event) {
  if (valor1.value.trim() == "" || valor2.value.trim() == "")
    alert("informe um numero");
  else if (isNaN(valor1.value) || isNaN(valor2.value))
    alert("Invalido! digite apenas numeros");
  else {
    operador = "";
    if (event.target === mais) operador = "+";
    else if (event.target === menos) operador = "-";
    else if (event.target === vezes) operador = "*";
    else if (event.target === divisao) operador = "/";

    if (operador === "/" && valor2.value == 0) {
      alert("Impossivel dividir por 0");
    } else {
      resul.value = eval(
        `${parseFloat(valor1.value)}${operador}${parseFloat(valor2.value)}`
      );
    }
  }
}
