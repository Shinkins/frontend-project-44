import readlineSync from 'readline-sync';
import grettingsPlayer from './src/cli.js';

function getRandomNumber() {
  let randomNumber = 0;
  const min = 1
  const max = 100
  return randomNumber = Math.floor(Math.random() * (max - min)) + min
}

function evenGame() {
  let correct = 0
  let notCorrect = 0
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  while (correct < 3) {
  const rnb = getRandomNumber()
  console.log(`Question: ${rnb}`)
  const outputAnswer = readlineSync.question('Your answer: ');
  
  if (rnb % 2 === 0 && outputAnswer === "yes" ) {
    correct++;
    console.log(correct);
    console.log('Correct!');
  } 
  if (rnb % 2 !== 0 && outputAnswer === 'no') {
    correct++;
    console.log(correct)
    console.log('Corrext!')
  } 
  if (correct === 3) {
    return 'Congratulations, Sam!'
  }
  };
}
export default evenGame;