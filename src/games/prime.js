import readlineSync from 'readline-sync';
import playThreeRounds from '../index.js';
import getRandomNumber from '../helper.js';

let name = '';

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return getRandomNumber(minCeiled, maxFloored);
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
  console.log(num);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isPrimeNum(num) ? 'yes' : 'no';
  const notCorrectAnswer = userAnswer;

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

const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  playThreeRounds(name, playRound);
};

export default brainPrime;
