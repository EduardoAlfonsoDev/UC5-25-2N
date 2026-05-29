function completeSentence() {
    //array com as sentenças
    const sentences = [
      {
        text: "I ___ a developer.", // texto a aparecer para o jogador
        answer: "am", // resposta correta
      },
      {
        text: "She ___ coding now.",
        answer: "is",
      },
      {
        text: "He ___ my friend.",
        answer: "is",
      },
      {
        text: "They ___  happy.",
        answer: "are",
      }
      
    ];
    // para cada sentença do array
    sentences.forEach((s) => {
      console.log("\nComplete");
      console.log(s.text); // mostra o texto da sentença
  
      let answer = redline.question("Answer: "); // pede para o jogador digitar a resposta no terminal
      // se a resposta do jogador for igual a resposta armazenda em 'answer' do objeto
      if (answer === s.answer) {
        console.log("Correct!"); // esta correta
        gameState.addScore(10);
      } else {
        console.log("Wrong!"); // esta incorreta
        gameState.loseLife();
      }
    });
  
    readline.question("\nPress ENTER to continue...");
  }