import readlineSync from 'readline-sync';

export function getRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomOperator = () => {
  const operatorArray = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operatorArray.length);
  const operator = operatorArray[index];
  return operator;
};

const logic = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  for (let i = 0; i < 3; i += 1) {
    const gameData = game();
    const question = gameData[0];
    const answer = gameData[1];
    console.log(`Qustion: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default logic;
