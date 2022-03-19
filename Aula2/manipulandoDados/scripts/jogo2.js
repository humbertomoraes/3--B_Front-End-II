let player_1_pontos = 0;
let player_2_pontos = 0;
let endgame = true;

while (endgame) {
    let player_1 = prompt('1 - rodada (1 - pedra 2, - papel, 3 - tesoura)');
    player_1 = parseInt(player_1);
    let player_2 = Math.random() * 3 + 1;
    player_2 = parseInt(player_2);
    alert('O player 2 escolheu: ' + player_2);

    if (player_1 == player_2) { // empate ???
        player_1 = 0;
    }

    switch (player_1) {
        case 0: // foi empate
            alert("EMPATE :O");
            break;

        case 1:
            if (player_2 == 2) { // 1 / 2
                alert("Você escolheu PEDRA, o jogador 2 escolheu TESOURA. Você GANHOU esta rodada !!!");
                player_1_pontos++;
            } else { // 1 / 3
                alert("Você escolheu PEDRA, o jogador 2 escolheu PAPEL. Você PERDEU esta rodada !!!");
                player_2_pontos++;
            }
            break;

        case 2:
            if (player_2 == 3) { // 2 / 3
                alert("Você escolheu TESOURA, o jogador 2 escolheu PAPEL. Você GANHOU esta rodada !!!");
                player_1_pontos++;
            } else { // 2 / 1
                alert("Você escolheu TESOURA, o jogador 2 escolheu PEDRA. Você PERDEU esta rodada !!!");
                player_2_pontos++;
            }
            break;

        case 3:
            if (player_2 == 1) { // 3 / 1
                alert("Você escolheu PAPEL, o jogador 2 escolheu PEDRA. Você GANHOU esta rodada !!!");
                player_1_pontos++;
            } else { // 3 / 2
                alert("Você escolheu PAPEL, o jogador 2 escolheu TESOURA. Você PERDEU esta rodada !!!");
                player_2_pontos++;
            }
            break;

        default:
            alert("e pra escolher entre 1 - pedra 2, - papel, 3 - tesoura >:(");
    }

    if (player_1_pontos == 2) { // alguem ganhou ? se sim msg de vitoria e terminar while
        alert("Parabens Você ganhou :D \n PLACAR: player 1: " + player_1_pontos + " player 2: " + player_2_pontos);
        endgame = false;
    } else if (player_2_pontos == 2) {
        alert("Infelizmente você perdeu :( , mas não desista !!! \n PLACAR: player 1: " + player_1_pontos + " player 2: " + player_2_pontos);
        endgame = false;
    }
}