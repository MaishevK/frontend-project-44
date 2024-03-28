import readlineSync from 'readline-sync';

const writeExercise = (text) => {
  console.log(text);
};

const writeQuestion = (data) => {
  console.log('Question:', data);
};

const writeAnswer = () => {
  const data = readlineSync.question('Your answer: ');
  return data;
};

const checkCorrect = (userAnswer, correctAnswer, notCorrectAnswer, name) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  if (userAnswer === notCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    return false;
  }
  console.log(`'${userAnswer}' is wrong answer ;(.\nLet's try again, ${name}!`);
  return false;
};

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

export {
  writeExercise, writeQuestion, writeAnswer, checkCorrect, playThreeRounds,
};
