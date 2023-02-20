import convertToLogic, { getRandomNumber } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = (number) => (number % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const question = getRandomNumber(1, 100);
  const answer = evenGame(question);
  return [question, answer];
};

const startGame = () => convertToLogic(description, game);

export default startGame;
