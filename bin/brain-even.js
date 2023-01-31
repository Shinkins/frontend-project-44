import readlineSync from 'readline-sync';
import grettingsPlayer from './src/cli.js';

function evenGame() {
  const numberIn = readlineSync.question('Answer "yes" if the number is even, otherwise answer "no". ');
  if (numberIn % 2 !== 0) {
    console.log('гг уебище');
  }
  console.log('да да гений!');
}
export default evenGame;

evenGame();

// function evenLogic() {}
