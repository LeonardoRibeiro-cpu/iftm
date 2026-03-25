
const lerArquivoJson = async() =>{
 const url = "https://leonardoribeiro-cpu.github.io/iftm/projsba/ProvaAjax/JSON/AjaxProva.json";
 const resposta = await fetch(url);
 const login = await resposta.json();
 return login;
};
export default lerArquivoJson;