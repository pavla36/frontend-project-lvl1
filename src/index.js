import ask from './cli.js';

const funcAnswer = (question, rightAnswer, name) => {
  console.log(`Question: ${question}`);
  const answer = ask('Your answer: ');
  if (answer === rightAnswer) {
    console.log('Correct!');
    return answer;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return answer;
};
export default funcAnswer;
