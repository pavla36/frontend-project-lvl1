import readlineSync from 'readline-sync';
const printName = () => {
    const name = readlineSync.question('Your answer: ');
    return name;
}

export  {printName};