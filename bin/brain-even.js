#!/usr/bin/env node
import ReadLine from '../src/cli.js';
import { writeGameName, writeExercise, writeQuestion, writeAnswer, checkCorrect, playThreeRounds } from '../src/games/even.js'

const getNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => !(number % 2);

const playRound = () => {
  const number = getNumber();
  writeQuestion(number);
  const userAnswer = writeAnswer();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const notCorrectAnswer = !isEven(number) ? 'yes' : 'no';

  return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, name);
};

writeGameName('brain-even\n');

const name = ReadLine();

writeExercise('Answer "yes" if the number is even, otherwise answer "no".');

playThreeRounds(name);

export { playRound };