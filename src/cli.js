import readlineSync from 'readline-sync';

export default function grettingsPlayer() {
  console.log('Welcome to the Brain Games!');
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player}!`);
  return player;
}

grettingsPlayer();
