import readlineSync from 'readline-sync';
import ReadLine from '../cli.js';
import playThreeRounds from '../index.js';

let getFirstNum = 0;
let getSecondNum = 0;
let operatorString = '';
let result = 0;
let correctAnswer = 0;
let userAnswer = 0;

const getNumber = () => Math.floor(Math.random() * 100);

const getOperator = () => {
  const num = getNumber();

  if (num <= 33) {
    operatorString = '+';
    result = getFirstNum + getSecondNum;

    return;
  }

  if (num > 66) {
    operatorString = '*';
    result = getFirstNum * getSecondNum;
    return;
  }
  operatorString = '-';
  result = getFirstNum - getSecondNum;
};

let name = '';

const playRound = () => {
  getFirstNum = getNumber();
  getSecondNum = getNumber();
  getOperator();
  console.log(`Question: ${getFirstNum} ${operatorString} ${getSecondNum}`);
  const innerValue = readlineSync.question('Your answer: ');

  if (innerValue === '0') {
    userAnswer = Number(innerValue);
  } else {
    userAnswer = Number(innerValue) || innerValue || '';
  }

  correctAnswer = result;
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

const brainCalc = () => {
  name = ReadLine();

  console.log('What is the result of the expression?');
  playThreeRounds(name, playRound);
};

export default brainCalc;
