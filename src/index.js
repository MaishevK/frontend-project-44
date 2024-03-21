import readlineSync from 'readline-sync';

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
if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
} else if (userAnswer === notCorrectAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    return false;
}
console.log(`'${userAnswer}' is wrong answer ;(.\nLet's try again, ${name}!`);
return false;
};

const playThreeRounds = (name, isCorrect) => {
for (let i = 0; i <= 2; i += 1) {

    if(!isCorrect) {
    break;
    }

    if (i === 2) {
    console.log(`Congratulations, ${name}!`);
    }
}
};

  export { writeGameName, writeExercise, writeQuestion, writeAnswer, checkCorrect, playThreeRounds };