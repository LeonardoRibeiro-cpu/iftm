export function cadastrarUser(key, valor) {
  let usuarios = localStorage.getItem(key);

  if (usuarios == null) localStorage.setItem(key, JSON.stringify([valor]));
  else {
    usuarios = JSON.parse(usuarios);
    usuarios.push(valor);
    localStorage.setItem(key, JSON.stringify(usuarios));
  }
}

export function consultarUser(key, credenciais) {
  let usuarios = localStorage.getItem(key);
  if (usuarios == null) {
    return false;
  } else {
    usuarios = JSON.parse(usuarios);
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === credenciais.usuario &&
        usuarios[i].senha === credenciais.senha
      )
        return true;
    }
    return false;
  }
}

export function usuarioExiste(key, usuario) {
  let usuarios = localStorage.getItem(key);
  if (usuarios == null) {
    return false;
  } else {
    usuarios = JSON.parse(usuarios);
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].usuario === usuario) {
        return true;
      }
    }
    return false;
  }
}
