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
  let progArrayString = '';
  const getElemPosition = Math.floor(getRandomInt(1, getProgLength));
  // console.log('length= ', getProgLength, 'position= ', getElemPosition);

  for (let i = 0; i < getProgLength; i += 1) {
    // console.log('i= ', i);
    if (progArray[i] === progArray[getElemPosition]) {
    // console.log('i\'s value= ', progArray[i]);
    // console.log('position\'s value= ', progArray[getElemPosition], 'array=', progArray);

      progArrayString += '.. ';
    } else {
      progArrayString = `${progArrayString} ${progArray[i]} `;
    }
  }

  writeQuestion(progArrayString);
  const innerValue = writeAnswer();
  const userAnswer = Number(innerValue) || innerValue || '';
  const correctAnswer = progArray[getElemPosition];
  const notCorrectAnswer = userAnswer;

  return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, name);
};

const brainProgression = () => {
  name = ReadLine();

  writeExercise('What number is missing in the progression?');
  playThreeRounds(name, playRound);
};

export default brainProgression;
