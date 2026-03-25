import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

const bcryptUser = (senha) =>{
 const senhaUser = senha;
 const salt = bcrypt.genSaltSync(10);
 const hash = bcrypt.hashSync(senhaUser, salt);
 return console.log(hash);
}
const criptografar = () =>{
 bcryptUser("wilton123");
//  bcryptUser("123maria");
//  bcryptUser("teste111");
//  bcryptUser("222teste");
//  bcryptUser("ana123carol");
}

export default criptografar;