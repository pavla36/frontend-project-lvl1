#!/usr/bin/env node
import ask from '../src/cli.js';
import funcAnswer from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = ask('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

const questions = () => {
  const min = 0;
  const max = 20;
  const minR = 0;
  const maxR = 9;
  const arrI = [];
  const arrD = [];
  const arrR = [];
  const arr = [];
  let numI = 0;
  let numD = 0;
  let numR = 0;
  let i = 0;
  let j = 0;
  let random = 0;
  let answer = 0;
  while (i < 3) {
    numI = Math.round(Math.random() * (max - min + 1) + min);
    numD = Math.round(Math.random() * (max - min + 1) + min);
    numR = Math.round(Math.random() * (maxR - minR + 1) + minR);
    arrI.push(numI);
    arrD.push(numD);
    arrR.push(numR);
    i += 1;
  }
  while (j < arrI.length) {
    while (arr.length !== 10) {
      arr.push(arrI[j]);
      arrI[j] += arrD[j];
    }
    if (arr.length === 10) {
      random = arr[arrR[j]];
      arr[arrR[j]] = '..';
      answer = funcAnswer(arr.join(' '), String(random), name);
      if (answer !== String(random)) {
        return;
      }
    }
    arr.length = 0;
    j += 1;
    if (j === arrI.length) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
  }
};
questions();
