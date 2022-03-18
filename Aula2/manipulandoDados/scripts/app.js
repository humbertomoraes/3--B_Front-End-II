let um = "Pedra"
let dois = "Papel"

let jogador1 = parseInt(prompt(" Digite 1 para Pedra\n Digite 2 para Papel\n Digite 3 para Tesoura"))
document.querySelector('.jog1').innerText += ' ' + jogador1


let computador = parseInt(Math.random() * 3 + 1)
document.querySelector('.jog2').innerText += ' ' + computador

if (jogador1 == 1 && computador == 2) {
    alert("Ganhou jogador 2 - Papel embrulha a Pedra");
} else if (jogador1 == 1 && computador == 3) {
    alert("Ganhou jogador 1 - Pedra quebra a Tesoura");
} else if (jogador1 == 2 && computador == 1) {
    alert("Ganhou jogador 1 - Papel embrulha a Pedra");
} else if (jogador1 == 2 && computador == 3) {
    alert("Ganhou jogador 2 - Tesoura corta o Papel");
} else if (jogador1 == 3 && computador == 1) {
    alert("Ganhou jogador 2 - Pedra quebra a Tesoura");
} else if (jogador1 == 3 && computador == 2) {
    alert("Ganhou jogador 1 - Tesoura corta o Papel");
} else {
    alert("Empatou");
}