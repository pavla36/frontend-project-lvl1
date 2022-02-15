import readlineSync from 'readline-sync';

const ask = (question) => {
  const answer = readlineSync.question(question);
  return answer;
};
export default ask;
