let acessar = confirm("Você deseja visitar nosso site?")

if (acessar) {
    let nome = prompt("Digite seu nome completo")
    alert("Seja bem vindo ao nosso site " + nome)
    document.querySelector('.nomeUsuario').innerText += '\n ' + nome
} else {
    alert("Esperamos que volte em breve")
}


let a = parseInt("2" + parseInt("2"));
console.log(a)

let edad = parseInt((22));
if (edad > 18) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}

let pia = Math.random("<.2");
console.log(pia)