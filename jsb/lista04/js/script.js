btn = document.getElementById("btnResultado");
btn.addEventListener("click", exibir)

function exibir(){
candidatos = [
    { nome: "Luiz Inácio Lula da Silva", partido: "PT", img: "candidato1.png" },
    { nome: "Simone Tebet", partido: "MDB", img: "candidato2.png" },
    { nome: "Ciro Gomes", partido: "PDT", img: "candidato3.png" },
    { nome: "Jair Messias Bolsonaro", partido: "PL", img: "candidato4.png" }
];
vet = [0,1,2,3];
nroVotos = Math.round(Math.random()*100)
vetVotos = [nroVotos, 100-nroVotos];
indicesSortados  = [];
for(i=1;i<=2;i++){
    indice = vet.splice(Math.floor(Math.random()*vet.length),1)[0];
    indicesSortados[i -1] = indice;
    document.getElementById(`candSorteado${i}`).innerHTML = candidatos[indice].nome.toUpperCase();
    document.getElementById(`partido${i}`).innerHTML = candidatos[indice].partido;
    document.getElementById(`imagem${i}`).src = `img/${candidatos[indice].img}`;
    document.getElementById(`votos${i}`).innerHTML = vetVotos[i-1].toFixed(1)+ "%";

}


 if (vetVotos[0] == vetVotos[1])
    document.getElementById("vencedor").innerHTML = "Empate";
else if(vetVotos[0] > vetVotos[1]){
document.getElementById("vencedor").innerHTML = candidatos[indicesSortados[0]].nome;
document.getElementById("percentual").innerHTML = vetVotos[0] + "%"
}
else{
document.getElementById("vencedor").innerHTML = candidatos[indicesSortados[1]].nome;
document.getElementById("percentual").innerHTML = vetVotos[1] + "%"
}
}
exibir();
// indice1 = Math.floor(Math.random()*vet.length);
// indice1 = vet.splice(indice1,1);

// indice2 = Math.floor(Math.random()*vet.length);
// indice2 = vet.splice(indice2,1);

// document.getElementById("candSorteado1").innerHTML = candidatos[indice1].nome;
// document.getElementById("partido1").innerHTML = candidatos[indice1].partido;
// document.getElementById("imagem1").src = `img/${candidatos[indice1].img}`;


// document.getElementById("candSorteado2").innerHTML = candidatos[indice2].nome;
// document.getElementById("partido2").innerHTML = candidatos[indice2].partido;
// document.getElementById("imagem2").src = `img/${candidatos[indice2].img}`;
