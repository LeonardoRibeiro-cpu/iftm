import usersTable from "./users.js";
window.addEventListener("DOMContentLoaded", function () {
  let caixa = document.getElementById("caixa");
  const maiorDeIdade = () =>
    usersTable
      .filter((user) => user.idade >= 18)
      .forEach((user) => {
        let p = document.createElement("p");
        p.innerText = `${user.nome} tem ${user.idade} anos`;
        caixa.appendChild(p);
      });

  const masculino = () =>
    usersTable
      .filter((user) => user.sexo === "M")
      .forEach((user) => {
        let p = document.createElement("p");
        p.innerText = `${user.nome}`;
        caixa.appendChild(p);
      });

  const maiorSalario = () =>
    usersTable.reduce((acc, user) => {
      if (user.salario > acc.salario) {
        return user;
      }
      return acc;
    }, usersTable[0]);

  const mulherSalario = () =>
    usersTable
      .filter((user) => user.sexo === "F" && user.salario > 5000)
      .forEach((user) => {
        let p = document.createElement("p");
        p.innerText = `${user.nome} tem um salário maior que 5000: ${user.salario}`;
        caixa.appendChild(p);
      });

  const mediaSalarioHomem = () => {
    let homens = usersTable.filter((user) => user.sexo === "M");
    let totalSalario = homens.reduce((acc, user) => acc + user.salario, 0);
    return totalSalario / homens.length;
  };
  const mediaSalarioMulher = () => {
    let mulheres = usersTable.filter((user) => user.sexo === "F");
    let totalSalario = mulheres.reduce((acc, user) => acc + user.salario, 0);
    return totalSalario / mulheres.length;
  };
  const limparDiv = () => {
    caixa.innerHTML = "";
  };
  const main = () => {
    switch (selecione.selectedIndex) {
      case 0:
        break;
      case 1:
        limparDiv();
        maiorDeIdade();
        break;
      case 2:
        limparDiv();
        masculino();
        break;
      case 3:
        limparDiv();
        let maior = maiorSalario();
        let p = document.createElement("p");
        p.innerText = `${maior.nome} tem o maior salário: ${maior.salario}`;
        caixa.appendChild(p);
        break;
      case 4:
        limparDiv();
        mulherSalario();
        break;
      case 5:
        limparDiv();
        let mediaHomem = mediaSalarioHomem();
        let mediaMulher = mediaSalarioMulher();
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.innerText = `Média salarial dos homens: ${mediaHomem.toFixed(2)}`;
        p2.innerText = `Média salarial das mulheres: ${mediaMulher}`;
        caixa.appendChild(p1);
        caixa.appendChild(p2);
        break;
    }
  };

  document.getElementById("selecione").addEventListener("change", main);
});
