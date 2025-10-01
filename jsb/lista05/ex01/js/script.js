emocao = [
  { fala: "seja bem-vindo!", img: "img/alegre.png" },
  { fala: "O que você quer", img: "img/Assustado.png" },
  { fala: "Não me faça perder meu tempo!", img: "img/Nervoso.png" },
  { fala: "ZZZZZZZZZ!", img: "img/Pensativo.png" },
];

img = document.getElementById("imagem");
img.src = emocao[3].img;
document.getElementById("emocao").innerHTML = emocao[3].fala;

img.addEventListener("mouseenter", exibeEnter);
img.addEventListener("mouseleave", exibeLeave);
img.addEventListener("click", exibeClick);

function exibeEnter() {
  if (!img.classList.contains("alegre") && !img.classList.contains("nervoso")) {
    img.src = emocao[1].img;
    document.getElementById("emocao").innerHTML = emocao[1].fala;
  }
}

function exibeClick() {
  let nome = prompt("Me diga seu nome:");

  img.classList.remove("alegre", "nervoso");

  setTimeout(() => {
    if (!nome || nome.trim() === "") {
      img.src = emocao[2].img;
      document.getElementById("emocao").innerHTML = emocao[2].fala;
      img.classList.add("nervoso");
    } else {
      img.src = emocao[0].img;
      document.getElementById("emocao").innerHTML =
        nome + ", " + emocao[0].fala;
      img.classList.add("alegre");
    }
  }, 10);
}

function exibeLeave() {
  img.src = emocao[3].img;
  document.getElementById("emocao").innerHTML = emocao[3].fala;
  img.classList.remove("alegre", "nervoso");
}
