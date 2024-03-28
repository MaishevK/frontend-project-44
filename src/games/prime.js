import ReadLine from '../cli.js';
import {
  writeExercise, writeQuestion, writeAnswer, checkCorrect, playThreeRounds,
} from '../index.js';

let name = '';

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const isPrimeNum = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playRound = () => {
  const num = getRandomInt(1, 20);
  writeQuestion(num);
  const userAnswer = writeAnswer();
  const correctAnswer = isPrimeNum(num) ? 'yes' : 'no';
  const notCorrectAnswer = userAnswer;

  return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, name);
};

const brainPrime = () => {
  name = ReadLine();

  writeExercise('Answer "yes" if given number is prime. Otherwise answer "no".');
  playThreeRounds(name, playRound);
};

export default brainPrime;
