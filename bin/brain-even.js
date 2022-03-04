#!/usr/bin/env node
import ask from '../src/cli.js';
import funcAnswer from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = ask('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const arrQuestions = ['Question: 15', 'Question: 6', 'Question: 7'];
const rightAnswer = ['no', 'yes', 'no'];
let answer = 0;
const questions = (arr) => {
  let i = 0;
  while (i < arr.length) {
    answer = funcAnswer(arr[i], rightAnswer[i], name);
    if (answer !== rightAnswer[i]) {
      return;
    }
    i += 1;
    if (i === arr.length) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};

questions(arrQuestions);
