cartas = new Array(27);
for(i = 0; i<=27; i++)
    cartas[i] = i;

indice = Math.floor(Math.random()*27)+1;
resultado = cartas[indice];
document.write(`<img src="img/carta${indice}.png">`);