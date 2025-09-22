btn = document.getElementById("btnDobro");
txt1 = document.getElementById("txtDigite");
txt2 = document.getElementById("txtDobro");

btn.addEventListener("click", dobro);


function dobro(){
    if(txt1.value.trim() == "")
    alert("Informe um numero")
    else if (isNaN(txt1.value))
    alert("O valor informado não e um numero")
    else{
    valor = txt1.value;
    txt2.value = valor *2;
}
}