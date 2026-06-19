//Variaveis

//Pontuação
let score = 0;

//Vidas / chances
let lives = 3;

//Função que adiciona pontos ao score
function addScore(points){
    score += points;
}

//Função que faz perder uma vida
function loseLife(){
    lives--;

    if(lives < 0){
        lives = 0;
    }
}

//Retorna a pontuação
function getScore(){
    return score;
}

//Retorna a via atual
function getLives(){
    return lives;
}

//Reinicia o jogo
function resetGame(){
    score = 0;
    lives = 3;
}

module.exports = {
    addScore,
    loseLife,
    getScore,
    getLives,
    resetGame
}