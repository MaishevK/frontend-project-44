import ReadLine from '../cli.js';
import { writeExercise, writeQuestion, writeAnswer, checkCorrect, playThreeRounds } from '../index.js'

let getFirstNum = 0;
let getSecondNum = 0;
let correctAnswer = 0;
let name = '';

const getNumber = () => Math.floor(Math.random() * 100);
const getGcd = (first, second) => {
    if (first %  second === 0) {
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
};

const playRound = () => {
    getFirstNum = getNumber();
    getSecondNum = getNumber();
    writeQuestion(`${getFirstNum}  ${getSecondNum}`);
    const innerValue = writeAnswer();
    const userAnswer = Number(innerValue) || innerValue || '';
    correctAnswer = getGcd(getFirstNum, getSecondNum) ;
    const notCorrectAnswer = userAnswer;

    return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, name);
};

const brainGcd = () => {
    name = ReadLine();

    writeExercise('Find the greatest common divisor of given numbers.');
    
    playThreeRounds(name, playRound);
}

export { brainGcd };