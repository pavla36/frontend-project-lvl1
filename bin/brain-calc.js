#!/usr/bin/env node
import ask from '../src/cli.js';
import funcAnswer from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = ask('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const questions = () => {
  const mathSigns = ['+', '-', '*'];
  const min = 0;
  const max = 100;
  let i = 0;
  let j = 0;
  let mathEx = 0;
  const arrNum = [];
  const arrNum2 = [];
  const arrMathSign = [];
  let answer = 0;
  while (i < 3) {
    const num1 = Math.random() * (max - min + 1) + min;
    const num2 = Math.random() * (max - min + 1) + min;
    const mathSign = Math.floor(Math.random() * mathSigns.length);
    arrNum.push(Math.round(num1));
    arrNum2.push(Math.round(num2));
    arrMathSign.push(mathSigns[mathSign]);
    i += 1;
  }
  while (j < arrMathSign.length) {
    if (arrMathSign[j] === '+') {
      mathEx = arrNum[j] + arrNum2[j];
      answer = funcAnswer((`${arrNum[j]} + ${arrNum2[j]}`), String(mathEx), name);
      if (answer !== String(mathEx)) {
        return;
      }
    } else if (arrMathSign[j] === '-') {
      mathEx = arrNum[j] - arrNum2[j];
      answer = funcAnswer((`${arrNum[j]} - ${arrNum2[j]}`), String(mathEx), name);
      if (answer !== String(mathEx)) {
        return;
      }
    } else if (arrMathSign[j] === '*') {
      mathEx = arrNum[j] * arrNum2[j];
      answer = funcAnswer((`${arrNum[j]} * ${arrNum2[j]}`), String(mathEx), name);
      if (answer !== String(mathEx)) {
        return;
      }
    }
    j += 1;
    if (j === arrMathSign.length) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};
questions();
