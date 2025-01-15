import readlineSync from 'readline-sync';
import ReadLine from '../cli.js';
import { playThreeRounds, } from '../index.js';

const getNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => !(number % 2);
let name = '';

const playRound = () => {
  const number = getNumber();
  console.log(number.toString());
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = (isEven(number) ? 'yes' : 'no').toLowerCase();
  const notCorrectAnswer = !isEven(number) ? 'yes' : 'no';

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

const brainEven = () => {
  name = ReadLine();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  playThreeRounds(name, playRound);
};

export default brainEven;