import readlineSync from 'readline-sync';

 export default function grettingsPlayer() {
    const name = readlineSync.question('May I have your name?');
    console.log('Welcome to the Brain Games!');
    console.log(name);
};