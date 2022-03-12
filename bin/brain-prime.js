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
  let j = 0;
  const yes = 'yes';
  const no = 'no';
  let answer = 0;
  let check = 0;
  while (i < 4) {
    const num = Math.round(Math.random() * (max - min + 1) + min);
    j = num;
    while (j > 0) {
      if (num % j === 0) {
        check += 1;
      }
      j -= 1;
    }
    if (check === 2) {
      answer = funcAnswer(num, yes, name);
      if (answer !== yes) {
        return;
      }
    } else {
      answer = funcAnswer(num, no, name);
      if (answer !== no) {
        return;
      }
    }
    i += 1;
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    check = 0;
  }
};
questions();
