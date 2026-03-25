import criptografar from "./critpografar.js";
import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';
import lerArquivoJson from "./lerApi.js";


const loginUsuario = async () =>{
    const login = await lerArquivoJson();
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
     
    let valido = false;
    login.forEach(login => {
    if(usuario === login.username){
      if(bcrypt.compareSync(senha,login.password)){
         valido = true
      }
     }   
    });
    if (valido) {
        alert("Login Válido");
      } else {
        alert("Login Inválido");
      }
    }

window.addEventListener("DOMContentLoaded",()=>{
    const btnEntrar = document.getElementById("btnEntrar")
    btnEntrar.addEventListener("click",loginUsuario);
});




