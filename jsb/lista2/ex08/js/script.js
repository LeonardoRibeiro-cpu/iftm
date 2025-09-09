opcoes = ["pedra","papel","tesoura"] 

indice1 = Math.floor(Math.random()*3)
indice2 = Math.floor(Math.random()*3)
document.write("<h1>Resultado Do Jogo</h1>")
document.write(`Jogador 1 = <br><img src="img/imagem0${indice1}.png"><br>`);
document.write(`Jogador 2 = <br><img src="img/imagem0${indice2}.png"><br>`);

if(indice1 == 0 && indice2 == 2 ||  indice1 == 1 && indice2 == 0 || indice1 == 2 && indice2 == 1)
document.write(`<p>Jogador 1 venceu</p>`)
else if(indice2 == 0 && indice1 == 2 || indice2 == 1 && indice1 == 0 || indice2 == 2 && indice1 == 1)
document.write(`<p>Jogador 2 venceu</p>`)
else
document.write(`empate`)