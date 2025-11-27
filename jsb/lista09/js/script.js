window.addEventListener('DOMContentLoaded', function() {
   
    const btnValidaNascimento = document.getElementById('btnValidaNascimento');
    let nascimento = document.getElementById('nascimento');
    btnValidaNascimento.addEventListener('click', validaNascimento)
    
    function validaNascimento() {
       let padrao = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/;
       if (padrao.test(nascimento.value)) 
           alert('Data de nascimento válida!');
       else
        alert('Data de nascimento inválida!');

    }
    let cpf = document.getElementById('cpf');
    const btnValidaCpf= document.getElementById('btnValidaCpf');
    btnValidaCpf.addEventListener('click', validaCpf)

     function validaCpf() {
       let padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
       if (padrao.test(cpf.value)) 
           alert('CPF válido!');
       else
        alert('CPF inválido!');
     }

     let matricula = document.getElementById('matricula');
     const btnValidaMatricula= document.getElementById('btnValidaMatricula');
     btnValidaMatricula.addEventListener('click', validaMatricula)

    function validaMatricula() {
    let padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-\w\w$/;
        if (padrao.test(matricula.value)) 
        alert('Matrícula válida!');
        else
        alert('Matrícula inválida!');
    }
   
    let codigoDisciplina = document.getElementById('disciplina');
    const btnValidaDisciplina= document.getElementById('btnValidaDisciplina');
    btnValidaDisciplina.addEventListener('click', validaDisciplina)
    function validaDisciplina() {
     let padrao = /^MT-\d\d\.\d{3}-IFTM$/i;
        if (padrao.test(codigoDisciplina.value)) 
        alert('Código de disciplina válido!');
        else
        alert('Código de disciplina inválido!');
    }

    let codigoDisciplina2 = document.getElementById('disciplina2');
    const btnValidaDisciplina2= document.getElementById('btnValidaDisciplina2');
    btnValidaDisciplina2.addEventListener('click', validaDisciplina2)
    function validaDisciplina2() {
     let padrao = /^MT-\d\d\.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;
        if (padrao.test(codigoDisciplina2.value)) 
        alert('Código de disciplina válido!');
        else
        alert('Código de disciplina inválido!');
    }

    let codigoDisciplina3 = document.getElementById('disciplina3');
    const btnValidaDisciplina3= document.getElementById('btnValidaDisciplina3');
    btnValidaDisciplina3.addEventListener('click', validaDisciplina3)
    function validaDisciplina3() {
     let padrao = /^M\s?T-\d\d\.\d{3}-I\s?F\s?T\s?M$/i;
        if (padrao.test(codigoDisciplina3.value)) 
        alert('Código de disciplina válido!');
        else
        alert('Código de disciplina inválido!');
    }

    let codigoDisciplina4 = document.getElementById('disciplina4');
    const btnValidaDisciplina4= document.getElementById('btnValidaDisciplina4');
    btnValidaDisciplina4.addEventListener('click', validaDisciplina4)
    function validaDisciplina4() {
     let padrao = /^(M|m)\s?(T|t)-\d\d\.\d{3}-(I|i)\s?(F|f)\s?(T|t)\s?(M|m)\s(Uberlândia\sCentro|Uberlândia)$/;
        if (padrao.test(codigoDisciplina4.value)) 
        alert('Código de disciplina válido!');
        else
        alert('Código de disciplina inválido!');
    }

    let campus = document.getElementById('campus');
    const btnValidaCampus  = document.getElementById('btnValidaCampus');
    btnValidaCampus.addEventListener('click', validaCampus)

    function  validaCampus(){
        let padrao = /^IFTM\scampus\s(Uberlândia|Uberlândia\sCentro)$/;
        if(padrao.test(campus.value))
        alert('Campus válido!');
        else
        alert('Campus inválido!');
    }

    let telefone = document.getElementById('telefone');
    const btnValidaTelefone = document.getElementById('btnValidaTelefone');
    btnValidaTelefone.addEventListener('click', validaTelefone)

    function validaTelefone(){
        let padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
        if(padrao.test(telefone.value))
        alert('Telefone válido!');
        else
        alert('Telefone inválido!');
    }
    let telefone2 = document.getElementById('telefone2');
    const btnValidaTelefone2 = document.getElementById('btnValidaTelefone2');
    btnValidaTelefone2.addEventListener('click', validaTelefone)

    function validaTelefone(){
        let padrao = /^\(\d{2,3}\)\d{5}-\d{4}$/;
        if(padrao.test(telefone2.value))
        alert('Telefone válido!');
        else
        alert('Telefone inválido!');
    }

    let altura = document.getElementById('altura');
    const btnValidaAltura = document.getElementById('btnValidaAltura');
    btnValidaAltura.addEventListener('click', validaAltura)
    function validaAltura(){
        let padrao = /^(1[.,][3-9]\d?|2[.,][0-5]\d?)$/;
        if(padrao.test(altura.value))
        alert('Altura válida!');
        else
        alert('Altura inválida!');
    }

    let faturamento = document.getElementById('faturamento');
    const btnValidaFaturamento = document.getElementById('btnValidaFaturamento');
    btnValidaFaturamento.addEventListener('click', validaFaturamento)
    function validaFaturamento(){
        let padrao = /^R\$\d{1,3}(\.\d{3}){0,4},\d{2}$/;
        if(padrao.test(faturamento.value))
        alert('Faturamento válido!');
        else
        alert('Faturamento inválido!');
    }

    let cronometro = document.getElementById('cronometro');
    const btnValidaCronometro = document.getElementById('btnValidaCronometro');
    btnValidaCronometro.addEventListener('click', validaCronometro)
    function validaCronometro(){
        let padrao = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]):\d{2}$/;
        if(padrao.test(cronometro.value))
        alert('Cronômetro válido!');
        else
        alert('Cronômetro inválido!');
    }

    let senha  = document.getElementById('senha');
    const btnValidaSenha = document.getElementById('btnValidaSenha');
    btnValidaSenha.addEventListener('click', validaSenha)
    function validaSenha(){
        let padrao = /^\w{1,5}\.&[A-Za-z]+\.[aeiou]+\.[A-Za-z]+[0-5]?-\D+,\W{2}\.[^ab01]+$/;
        if(padrao.test(senha.value))
        alert('Senha válida!');
        else
        alert('Senha inválida!');
    }
});