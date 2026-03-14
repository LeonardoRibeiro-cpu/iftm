window.addEventListener("DOMContentLoaded", () => {
  lerArquivoAssync();
});

const lerArquivoAssync = async () => {
  const url =
    "https://leonardoribeiro-cpu.github.io/iftm/projsba/APIs/Rating/rating.json";
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Exception("Exception erro!");
    const rating = await response.json();
    exibirRating(rating);
  } catch (error) {
    console.error(error.mensage);
  }
};

exibirRating = (rating) => {
  let caixa = document.getElementById("caixa");
  rating.map((item) => {
    let p = document.createElement("p");
    p.innerText = item.nome + " - " + item.rating + " - " + item.depoimento;
    caixa.appendChild(p);
  });
};
