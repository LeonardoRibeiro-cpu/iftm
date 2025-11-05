window.addEventListener("DOMContentLoaded", function () {
  let caixa1 = document.getElementById("caixa1");
  let caixa2 = document.getElementById("caixa2");
  let btnTrocar = document.getElementById("btnTrocar");
  const tempoEspera = [
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
  ];
  btnTrocar.addEventListener("click", function () {
    let time = document.getElementById("tempo");
    if (time.selectedIndex != 0) {
      let timeSelect = tempoEspera[time.selectedIndex - 1];
      setTimeout(trocar, timeSelect);
    } else {
      alert("Selecione um tempo antes de trocar!");
    }
  });

  function trocar() {
    caixa2.value = caixa1.value;
    caixa1.value = "";
  }
});
