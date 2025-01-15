import readlineSync from 'readline-sync';
import playThreeRounds from '../index.js';
import getRandom from '../helper.js';

const getNumber = () => Math.floor(getRandom());
const isEven = (number) => (number % 2) === 0;
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
  console.log('Welcome to the Brain Games!');

  name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  playThreeRounds(name, playRound);
};

export default brainEven;
