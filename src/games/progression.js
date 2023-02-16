import grettingsPlayer from '../cli.js';
import logic, { getRandomNumber } from '../index.js';

const getProgression = () =>{
    const array = [];
    
    const plusProg  = getRandomNumber(1, 11)
    const arrayCount = getRandomNumber(5, 11);
    const iCount = getRandomNumber(0, 6); 
    console.log(plusProg);
    for (let i = iCount; i < arrayCount * plusProg; i += plusProg) {
        array.push(i);
    }
    const tourcthi = getRandomNumber(0, array.length);
    console.log(tourcthi);
    const secretNumber = array[tourcthi];
    array[tourcthi] = '..';
    return array.join(' ');
}

const description = 'What number is missing in the progression?'

const game = (description, getProgression) => {
   const answer = secretPlace
   console.log(answer);    
}

console.log(getProgression());
//console.log(game())