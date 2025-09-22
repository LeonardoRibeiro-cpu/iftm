btnEnter = document.getElementById("btnEntrar");
txt = document.getElementById("txtLogin");
pasw = document.getElementById("pasSenha");
confirma = document.getElementById("pasConfirmar");

btnEnter.addEventListener("click", exibir);

function exibir() {
  if (txt.value.trim() == "") {
    alert("informe um login valido");
    return;
  }
  if (pasw.value.trim() == "" || confirma.value.trim() == "") {
    alert("informe uma senha valida");
    return;
  } else {
    if (pasw.value == confirma.value)
      alert("Bem vindo ao sistema " + txt.value);
    else {
      alert("Senha incorreta");
      limparSenhas();
    }
  }
}
function limparSenhas() {
  pasw.value = "";
  confirma.value = "";
}
