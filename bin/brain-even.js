#!/usr/bin/env node

import readlineSync from 'readline-sync';
import ReadLine from '../src/cli.js';

const getNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => !(number % 2);
const gameRound = () => {
  const number = getNumber();
  console.log('Question: ', number);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const notCorrectAnswer = !isEven(number) ? 'yes' : 'no';
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

console.log('brain-even\n');

const name = ReadLine();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i <= 2; i += 1) {
  const isCorrect = gameRound();

  if(!isCorrect) {
    break;
  }

  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}

// for (let i = 0; i < 3; i += 1) {
//   const randomNum = Math.floor(Math.random() * 100);
//   console.log('Question: ', randomNum);
//   const answer = readlineSync.question('Your answer: ');
//   console.log(randomNum, answer);

//   if ((randomNum % 2 !== 0) && (answer === 'yes')) {
//     console.log("'yes' is wrong answer ;(. Correct answer was 'no'");
//     console.log(`Let's try again, ${name}`);
//     break;
//   } else if ((randomNum % 2 === 0) && (answer === 'no')) {
//     console.log("'no' is wrong answer ;(. Correct answer was 'yes'");
//     console.log(`Let's try again, ${name} `);
//     break;
//   } 
  
//   if ((answer !== 'yes') || (answer !== 'no')) {
//     console.log(`'${answer}' is wrong answer ;(.`);
//     break;
//   } 
//   console.log('Correct!');
  
//   if (i === 2) {
//   console.log(`Congratulations, ${name}!`);
//   }
// }



