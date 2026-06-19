const readline = require('readline-sync'); //Importando a biblioteca redline-sync
const gameState = require('./gameState'); //Importando as funções de gameState.js

// Importando os jogos
const quiz = require('./games/quiz');

function showMenu() {

    // Loop infinito: o menu sempre volta
    while (true) {

        // Verifica se o jogador perdeu todas as vidas
        if (gameState.getLives() <= 0) {
            console.log("\nGAME OVER");
            console.log("Final Score:", gameState.getScore());
            gameState.resetGame();
        }

        console.log("\n==== DEVLINGO ARENA ====");
        console.log("Score:", gameState.getScore(), "| Lives:", gameState.getLives());
        console.log("1 - Quiz");
        console.log("0 - Exit");

        let option = readline.question("Choose an option: ");

        switch(option) {
            case "1": quiz(); break;
            case "0": process.exit();
            default:
                console.log("Invalid option.");
        }
    }
}

module.exports = showMenu;
//showMenu()