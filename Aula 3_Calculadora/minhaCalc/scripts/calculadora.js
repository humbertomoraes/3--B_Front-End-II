var num1 = parseInt(prompt("Digite o primeiro número"))
document.querySelector('.num1').innerText += ' ' + num1

do {
    var operacao = prompt("Digite uma das quatro operações básicas desejada");
} while (operacao != "+" && operacao != "-" && operacao != "*" && operacao != "/")
document.querySelector('.operacao').innerText += '  ' + "(" + operacao + ")"

var num2 = parseInt(prompt("Digite o segundo número"))
document.querySelector('.num2').innerText += ' ' + num2

switch (operacao) {
    case "+":
        var resultado = num1 + num2;
        alert(resultado)
        document.querySelector('.Resultado').innerText += ' ' + resultado
        break;
    case "-":
        var resultado = num1 - num2;
        alert(resultado)
        document.querySelector('.Resultado').innerText += ' ' + resultado
        break;
    case "*":
        var resultado = num1 * num2;
        alert(resultado)
        document.querySelector('.Resultado').innerText += ' ' + resultado
        break;
    case "/":
        var resultado = num1 / num2;
        if (num2 == 0) {
            alert("Não é possível dividir por zero")
        } else {
            alert(resultado)
            document.querySelector('.Resultado').innerText += ' ' + resultado
            break;
        }
}