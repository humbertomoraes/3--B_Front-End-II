let jogador1 = parseInt(prompt(" Digite 1 para Pedra\n Digite 2 para Papel\n Digite 3 para Tesoura"))
document.querySelector('.jog1').innerText += ' ' + jogador1


let computador = parseInt(Math.random() * 3 + 1)
document.querySelector('.jog2').innerText += ' ' + computador

if (jogador1 == 1 && computador == 2) {
    document.querySelector('.Resultado').innerText += ' ' + "Ganhou o computador - Papel embrulha a Pedra"
} else if (jogador1 == 1 && computador == 3) {
    document.querySelector('.Resultado').innerText += ' ' + "Você ganhou - Pedra quebra a Tesoura"
} else if (jogador1 == 2 && computador == 1) {
    document.querySelector('.Resultado').innerText += ' ' + "Você ganhou - Papel embrulha a Pedra"
} else if (jogador1 == 2 && computador == 3) {
    document.querySelector('.Resultado').innerText += ' ' + "Ganhou o computador - Tesoura corta o Papel"
} else if (jogador1 == 3 && computador == 1) {
    document.querySelector('.Resultado').innerText += ' ' + "Ganhou o computador - Pedra quebra a Tesoura"
} else if (jogador1 == 3 && computador == 2) {
    document.querySelector('.Resultado').innerText += ' ' + "Você ganhou - Tesoura corta o Papel"
} else {
    document.querySelector('.Resultado').innerText += ' ' + "Empatou<<<<"
}