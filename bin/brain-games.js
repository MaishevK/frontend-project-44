#!/usr/bin/env node

import readlineSync from 'readline-sync';

const name = readlineSync.question('Your answer: ');

console.log('brain-games');
console.log('Welcome to the Brain Games!');
console.log('May I have your name? ', name);
console.log(`Hello, ${name}!`);
