btn = document.getElementById("btnExibir");
txt = document.getElementById("txtName");


btn.addEventListener("click", exibir);


function exibir(){
    value = txt.value;
    alert(value.toUpperCase());
}