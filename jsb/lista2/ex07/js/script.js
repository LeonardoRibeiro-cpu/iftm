dado = new Array(6);
 for(i = 1; i <=6; i++)
    dado[i] = i

indiceVet = Math.floor(Math.random()*6)+1;
resultado = dado[indiceVet];
document.write(`<img src="img/dado0${resultado}.png">`);
