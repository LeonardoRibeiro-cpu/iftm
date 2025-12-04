import { cadastrarUser, consultarUser, usuarioExiste } from "./storage.js";

window.addEventListener("DOMContentLoaded", function () {
  let user = document.getElementById("user");
  let pwd = document.getElementById("pwd");
  let pwdConfirmar = document.getElementById("pwdConfirmar");
  const CHAVE = "usuarios";

  let btnCadastro = document.getElementById("btnCadastrar");
  if (btnCadastro) {
    btnCadastro.addEventListener("click", function () {
      if (!user.value || !pwd.value) {
        Swal.fire({
          icon: "warning",
          title: "Atenção!",
          text: "Preencha usuário e senha!",
          confirmButtonColor: "#3085d6",
        });
        return;
      }

      if (pwd.value !== pwdConfirmar.value) {
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "As senhas não conferem!",
        });
        return;
      }

      if (usuarioExiste(CHAVE, user.value)) {
        Swal.fire({
          icon: "error",
          title: "Ops...",
          text: "Usuário já cadastrado!",
        });
        return;
      }

      const novoUsuario = { usuario: user.value, senha: pwd.value };
      cadastrarUser(CHAVE, novoUsuario);

      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Cadastro realizado com sucesso!",
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    });
  }

  let btnEntrar = document.getElementById("btnEntrar");
  if (btnEntrar) {
    btnEntrar.addEventListener("click", function () {
      if (!user.value || !pwd.value) {
        Swal.fire({
          icon: "warning",
          title: "Atenção!",
          text: "Preencha usuário e senha!",
        });
        return;
      }

      if (consultarUser(CHAVE, { usuario: user.value, senha: pwd.value })) {
        localStorage.setItem("logado", "true");

        Swal.fire({
          icon: "success",
          title: "Bem-vindo!",
          text: "Login realizado com sucesso!",
          timer: 1200,
          showConfirmButton: false,
        });

        setTimeout(() => {
          window.location.href = "nivel.html";
        }, 1200);
      } else {
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Usuário ou senha inválidos!",
        });
      }
    });
  }
});
