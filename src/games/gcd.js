import logic, { getRandomNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else if (number1 < number2) {
      number2 -= number1;
    }
  }
  return number1;
};

const game = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const answer = getGCD(num1, num2);
  const question = `${num1} ${num2}`;
  return [question, answer];
};

const start = () => logic(description, game);

export default start;
