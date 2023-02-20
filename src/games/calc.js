import convertToLogic, { getRandomNumber, getRandomOperator } from '../index.js';

function correct(number1, number2, oper) {
  let result = null;
  switch (oper) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
  }
  return result;
}

const description = 'What is the result of the expression?';

const game = () => {
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const oper = getRandomOperator();
  const question = `${number1} ${oper} ${number2}`;
  const answer = correct(number1, number2, oper).toString();
  return [question, answer];
};
const startGame = () => convertToLogic(description, game);

export default startGame;
