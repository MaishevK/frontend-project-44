import readlineSync from 'readline-sync';
import ReadLine from '../cli.js';
import { playThreeRounds, } from '../index.js';

let name = '';

const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

const getProgressionArray = (getProgLength, getProgStart, getProgStep) => {
  const result = [];
  let value = getProgStart;
  for (let i = 0; i < getProgLength; i += 1) {
    result.push(value);
    value += getProgStep;
  }
  return result;
};

const playRound = () => {
  const getProgLength = getRandomInt(5, 10);
  const getProgStart = getRandomInt(0, 20);
  const getProgStep = getRandomInt(1, 10);
  const progArray = getProgressionArray(getProgLength, getProgStart, getProgStep);

  const getElemPosition = Math.floor(getRandomInt(1, getProgLength));
  // console.log('length= ', getProgLength, 'position= ', getElemPosition);
  const innerArray = [...progArray];
  // fix symbol to '..' according to getElemPosition
  for (let i = 0; i < getProgLength; i += 1) {
    // console.log('i= ', i);
    if (innerArray[i] === innerArray[getElemPosition]) {
      innerArray[i] = '..';
    }
  }
  // converting array from string
  const progArrayString = innerArray.join(' ');

  console.log(progArrayString);
  const innerValue = readlineSync.question('Your answer: ');;
  const userAnswer = Number(innerValue) || innerValue || '';
  const correctAnswer = progArray[getElemPosition];
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

const brainProgression = () => {
  name = ReadLine();

  console.log('What number is missing in the progression?');
  playThreeRounds(name, playRound);
};

export default brainProgression;
