#!/usr/bin/env node

import readlineSync from 'readline-sync';
import ReadLine from '../src/cli.js';

//common functions
const writeGameName = (text) => {
  console.log(text);
};

const writeExercise = (text) => {
  console.log(text);
};

const writeQuestion = (data) => {
  console.log('Question: ', data);
};

const writeAnswer = () => {
   const data = readlineSync.question('Your answer: ');
   return data;
};

const checkCorrect = (userAnswer, correctAnswer, notCorrectAnswer, name) => {
  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    return true;
  } else if (userAnswer.toLowerCase() === notCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    return false;
  }
  console.log(`'${userAnswer}' is wrong answer ;(.\nLet's try again, ${name}!`);
  return false;
};

const playThreeRounds = (name) => {
  for (let i = 0; i <= 2; i += 1) {
    const isCorrect = gameRound();
  
    if(!isCorrect) {
      break;
    }
  
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

const getNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => !(number % 2);

const gameRound = () => {
  const number = getNumber();
  writeQuestion(number);
  const userAnswer = writeAnswer();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const notCorrectAnswer = !isEven(number) ? 'yes' : 'no';

  return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, name);
};
//--------

writeGameName('brain-even\n');

const name = ReadLine();

writeExercise('Answer "yes" if the number is even, otherwise answer "no".');

playThreeRounds(name);



