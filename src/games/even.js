import ReadLine from '../cli.js';
import {
  writeExercise, writeQuestion, writeAnswer, checkCorrect, playThreeRounds,
} from '../index.js';

const getNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => !(number % 2);
let name = '';

const playRound = () => {
  const number = getNumber();
  writeQuestion(number.toString());
  const userAnswer = writeAnswer().toLowerCase();
  const correctAnswer = (isEven(number) ? 'yes' : 'no').toLowerCase();
  const notCorrectAnswer = !isEven(number) ? 'yes' : 'no';

  return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, name);
};

const brainEven = () => {
  name = ReadLine();

  writeExercise('Answer "yes" if the number is even, otherwise answer "no".');
  playThreeRounds(name, playRound);
};

export default brainEven;
