import ReadLine from '../cli.js';
import {
  writeExercise, writeQuestion, writeAnswer, checkCorrect, playThreeRounds,
} from '../index.js';

let getFirstNum = 0;
let getSecondNum = 0;
let operatorString = '';
let result = 0;
let correctAnswer = 0;

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
  writeQuestion(`${getFirstNum} ${operatorString} ${getSecondNum}`);
  const userAnswer = Number(writeAnswer()) || '';
  correctAnswer = result;
  const notCorrectAnswer = userAnswer;

  return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, name);
};

const brainCalc = () => {
  name = ReadLine();

  writeExercise('What is the result of the expression?');
  playThreeRounds(name, playRound);
};

export default brainCalc;
