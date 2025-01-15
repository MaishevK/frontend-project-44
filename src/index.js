const playThreeRounds = (name, playRound) => {
  for (let i = 0; i <= 2; i += 1) {
    const isCorrect = playRound();
    if (!isCorrect) {
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export { playThreeRounds, };
