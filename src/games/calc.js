import ReadLine from '../cli.js';
import { writeGameName, writeExercise, writeQuestion, writeAnswer, checkCorrect, playThreeRounds } from '../index.js'

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
        return ;
    } else if (num > 66) {
        operatorString = '*';
        result = getFirstNum * getSecondNum;
        return; 
    }
        operatorString = '-';
        result = getFirstNum - getSecondNum;
        return;
};

let name = '';

const playRound = () => {
    getFirstNum = getNumber();
    getSecondNum = getNumber();
    getOperator();
    writeQuestion(`${getFirstNum} ${operatorString} ${getSecondNum}`);
    const userAnswer = Number(writeAnswer());
    correctAnswer = result;
    const notCorrectAnswer = userAnswer;

    return checkCorrect(userAnswer, correctAnswer, notCorrectAnswer, name);
};

const brainCalc = () => {
    writeGameName('brain-calc\n');

    name = ReadLine();

    writeExercise('What is the result of the expression?');

    playThreeRounds(name, playRound);
};

export { brainCalc }