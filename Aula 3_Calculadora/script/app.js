alert("Começando a fazer nossos cálculos, bora?");
let num1 = prompt("Digite um número");
let num1 = parseInt(num1)
    //converter o num1 para inteiro
let operacao = prompt("Digite o operador - + / ou *")
let b = prompt("Digite o segundo número");
let b = parseInt(b)
    // converter o num2 para inteiro
let retorno = alert("O resultado é: " + calcular())

function calcular() {

    if (operacao == "+") {
        return alert(a + b)
    }

    if (operacao == "-") {
        return alert(a - b)
    }

    if (operacao == "*") {
        return alert(a * b)
    }

    if (operacao == "/" && b != 0) {
        return alert(a / b)
    } else {
        return "Impossivel dividir por 0"
    }

}

function insert(num) {
    document.getElementById('resultado').innerHTML = num;
}