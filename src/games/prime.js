import logic, { getRandomNumber } from '../index.js';

const itsPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const number = getRandomNumber(1, 1000);
  const answer = itsPrime(number);
  const question = `${number}`;
  return [question, answer];
};

const start = () => logic(description, game);

export default start;
