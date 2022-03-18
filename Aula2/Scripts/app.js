alert("Ola pessoal"); //alert trava a tela do navegador e mostra mensagem ao usuário
confirm("Podemos coninuar?"); // confirm solicita alguma ação do usuário tipo (S/N)

let verificaAcesso = confirm("Você deseja acessar este site?") // cria uma variável com a escolha do usuário
console.log(verificaAcesso) //mostra no console do navegador (True ou False) conforme o clique do usuário no confirm acima

let usuario = prompt("Informe seu nome:") // cria variável com o que o usuário digitar, PROMPT abre janela para digitação no navegador
alert("Seja bem vindo" + usuario) //trava a tela do navegador com breve mensagem + o parâmetro que o usuário digitou acima
console.log(usuario) //Mostra no console do navegador o que o usuário digitou no PROMPT acima


document.querySelector('.nomeUsuario').innerText += ' ' + usuario