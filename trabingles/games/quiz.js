const readline = require('readline-sync');
const gameState = require('../gameState');

function quiz() {


    const questions = [
        {
            question: "She ____ my friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "2"
        },
        {
            question: "They ____ students.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "We ____ students.",
            options: ["1) is", "2) are", "3) am"],
            answer: "2"
        },
        {
            question: "I ____ ready.",
            options: ["1) is", "2) are", "3) am"],
            answer: "3"
        },
        {
            question: "He ____ a teacher.",
            options: ["1) is", "2) are", "3) am"],
            answer: "1"
        },
        {
            question: "You ____ my best friend.",
            options: ["1) am", "2) is", "3) are"],
            answer: "3"
        },
        {
            question: "The dog ____ hungry.",
            options: ["1) is", "2) are", "3) am"],
            answer: "1"
        },
        {
            question: "My parents ____ at home.",
            options: ["1) am", "2) is", "3) are"],
            answer: "3"
        },
        {
            question: "It ____ a beautiful day.",
            options: ["1) are", "2) am", "3) is"],
            answer: "3"
        },
        {
            question: "The children ____ happy.",
            options: ["1) are", "2) is", "3) am"],
            answer: "1"
        }
    ];

    // para cada questao
    questions.forEach(q => {

        console.log("\n" + q.question); //ele mostra a questao
        q.options.forEach(opt => console.log(opt)); // percorre o array 'options' da questao e mostra no terminal

        let answer = readline.question("Answer: "); // pede para o usuario inserir uma opçao
        
        if(answer === q.answer) {
            console.log("Correct!");
            gameState.addScore(10);
        } else {
            console.log("Wrong!");
            gameState.loseLife();
        }

    });

    readline.question("\nPress ENTER to continue...");
}

module.exports = quiz;