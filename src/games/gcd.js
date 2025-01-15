import readlineSync from 'readline-sync';
import ReadLine from '../cli.js';
import { playThreeRounds, } from '../index.js';

let getFirstNum = 0;
let getSecondNum = 0;
let correctAnswer = 0;
let name = '';

const getNumber = () => Math.floor(Math.random() * 100);

const getGcd = (first, second) => {
  if (first % second === 0) {
    return second;
  }
  if (second % first === 0) {
    return first;
  }

  const array = [];

  for (let i = first; i > 0; i -= 1) {
    if (first % i === 0) {
      array.push(Math.floor(i));
    }
  }

  for (let i = second; i > 0; i -= 1) {
    if ((second % i === 0) && (array.includes(i))) {
      return i;
    }
  }
  return 0;
};

const playRound = () => {
  getFirstNum = getNumber();
  getSecondNum = getNumber();
  console.log(`${getFirstNum} ${getSecondNum}`);
  const innerValue = readlineSync.question('Your answer: ');
  const userAnswer = Number(innerValue) || innerValue || '';
  correctAnswer = getGcd(getFirstNum, getSecondNum);
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

const brainGcd = () => {
  name = ReadLine();

  console.log('Find the greatest common divisor of given numbers.');
  playThreeRounds(name, playRound);
};

export default brainGcd;
