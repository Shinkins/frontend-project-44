import logic, { getRandomNumber } from '../index.js';

const getProgression = (plus, arrcount, icount) => {
    const array = []; 
    for (let i = icount; i < arrcount * plus; i += plus) {
        array.push(i);
    }    
    return array;
}

const description = 'What number is missing in the progression?'

const game = () => {
    const plusProg  = getRandomNumber(1, 11)
    const arrayCount = getRandomNumber(5, 11);
    const iCount = getRandomNumber(0, 6);
    const arr = getProgression(plusProg, arrayCount, iCount);
    const secretIndex = getRandomNumber(0, arr.length);
    const secretNumber = arr[secretIndex];
    const answer = secretNumber.toString();
    arr[secretIndex] = '..';
    const question = arr.join(' ');
    return [question, answer]
}

const start = () => logic(description, game);

export default start;