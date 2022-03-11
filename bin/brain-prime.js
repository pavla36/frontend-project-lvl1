#!/usr/bin/env node
import ask from '../src/cli.js';
import funcAnswer from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = ask('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const questions = () => {
  const min = 1;
  const max = 100;
  let i = 0;
  const yes = 'yes';
  const no = 'no';
  let answer = 0;
  while (i < 4) {
    const num = Math.round(Math.random() * (max - min + 1) + min);
    if (num % 2 === 0) {
      answer = funcAnswer(num, no, name);
      if (answer !== no) {
        return;
      }
    } else {
      answer = funcAnswer(num, yes, name);
      if (answer !== yes) {
        return;
      }
    }
    i += 1;
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};
questions();
