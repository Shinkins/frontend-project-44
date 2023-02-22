import convertToLogic, { getRandomNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  let a = number1;
  let b = number2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else if (a < b) {
      b -= a;
    }
  }
  return a;
};

const game = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const answer = String(getGCD(num1, num2));
  const question = `${num1} ${num2}`;
  return [question, answer];
};

const startGame = () => convertToLogic(description, game);

export default startGame;
