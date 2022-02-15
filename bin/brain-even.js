#!/usr/bin/env node
import ask from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = ask('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const arrQuestions = ['Question: 15', 'Question: 6', 'Question: 7'];
const rightAnswer = ['no', 'yes', 'no'];
const questions = (arr) => {
  let i = 0;
  let countAnswer = 0;
  while (i <= arr.length) {
    console.log(arr[i]);
    const answer = ask('Your answer: ');
    if (answer === rightAnswer[i]) {
      countAnswer += 1;
      console.log('Correct!');
    } else if ((answer === 'no')) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      break;
    }
    i += 1;
    if (countAnswer === arr.length) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};

questions(arrQuestions);
