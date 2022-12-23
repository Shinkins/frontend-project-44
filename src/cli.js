#!/usr/bin/env node
import readlineSync from 'readline-sync';

 export function grettingsPlayer(name) {
    const name = readlineSync.question('May I have your name?');
    console.log('Welcome to the Brain Games!');
    console.log(name);
}

export function biba () {
    console.log('Импортировалось!')
}