import ReadLine from '../cli.js';
import { writeGameName, writeExercise, writeQuestion, writeAnswer, checkCorrect, playThreeRounds } from '../index.js'

const getNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => !(number % 2);
let name = '';

const playRound = () => {
  const number = getNumber();
  writeQuestion(number);
  const userAnswer = writeAnswer();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const notCorrectAnswer = !isEven(number) ? 'yes' : 'no';

  return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, name);
};

const brainEven = () => {
    writeGameName('brain-even\n');

    name = ReadLine();

    writeExercise('Answer "yes" if the number is even, otherwise answer "no".');

    playThreeRounds(name);
}

export { brainEven, playRound };