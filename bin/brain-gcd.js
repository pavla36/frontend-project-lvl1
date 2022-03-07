#!/usr/bin/env node
import ask from '../src/cli.js';
import funcAnswer from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = ask('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
const func = (a, b) => {
  let i = a;
  while (i <= b) {
    if (b % i === 0 && a % i === 0) {
      return i;
    }
    i -= 1;
  }
  return 1;
};
const questions = () => {
  const min = 1;
  const max = 100;
  let i = 0;
  let mathEx = 0;
  const arrNum = [];
  const arrNum2 = [];
  let answer = 0;
  while (i < 3) {
    const num1 = Math.random() * (max - min + 1) + min;
    const num2 = Math.random() * (max - min + 1) + min;
    arrNum.push(Math.round(num1));
    arrNum2.push(Math.round(num2));
    i += 1;
  }
  let j = 0;
  while (j < arrNum.length) {
    if (arrNum[j] < arrNum2[j]) {
      mathEx = func(arrNum[j], arrNum2[j]);
      answer = funcAnswer((`${arrNum[j]} ${arrNum2[j]}`), String(mathEx), name);
      if (answer !== String(mathEx)) {
        return;
      }
    } else {
      mathEx = func(arrNum2[j], arrNum[j]);
      answer = funcAnswer((`${arrNum[j]} ${arrNum2[j]}`), String(mathEx), name);
      if (answer !== String(mathEx)) {
        return;
      }
    }
    j += 1;
    if (j === arrNum.length) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};
questions();
