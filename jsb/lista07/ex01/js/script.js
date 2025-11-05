window.addEventListener("DOMContentLoaded", function () {
  let caixa1 = document.getElementById("caixa1");
  let caixa2 = document.getElementById("caixa2");
  let btnTrocar = document.getElementById("btnTrocar");
  btnTrocar.addEventListener("click", function () {
    setTimeout(trocar, 2000);
  });

  function trocar() {
    caixa2.value = caixa1.value;
    caixa1.value = "";
  }
});
