const wakeUp = () => 'Acordando!';

const drinkCoffe = () => 'Bora tomar um cafe!';

const doSleep = () => 'Partiu dormir!';

const doingThings = (a) => console.log(a());

doingThings(wakeUp);

const newEmployees = (a, b, c) => {
  const employees = {
    id1: a, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: b, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: c, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const addEmployee = (name) => ({ name, email: `${name.toLowerCase().replace(/ /g, '_')}@trybe.com` })

console.log(newEmployees(addEmployee('Felipe Lima'), addEmployee('Joao Batista'), addEmployee('Maria das Gracas')));

const winCondition = (myGame, winnerGame) => myGame === winnerGame;

const gameGen = (myGame, winCondition) => {
  const number = Math.round(Math.random() * 4) + 1;
  console.log(number);
  return winCondition(myGame, number) ? 'Win!' : 'Lose!'
}

console.log(gameGen(4, winCondition));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
  let grade = 0;
  for (let i = 0; i < 10; i += 1) {
    if (STUDENT_ANSWERS[i] === 'N.A') {
      grade = grade;
    } else {
      switch (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
        case true:
          grade += 1;
          break;
        case false:
          grade -= 0.5;
        default:
          grade = grade;
          break;
      }
    }
  }
  return grade;
}

const rateTest = (arr1, arr2, callback) => console.log(callback(arr1, arr2));

rateTest(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer);
