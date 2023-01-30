#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default function grettingsPlayer() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return `Hello, ${name}!`;
}
