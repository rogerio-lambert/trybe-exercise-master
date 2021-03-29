const employ = (nomeCompleto) => {
  const firstName = nomeCompleto.match(/\w+/);
  return {
      nome: nomeCompleto,
      email: `${firstName[0]}@trybe.com`,
  }
}
const newEmployees = () => {
    const employees = {
      id1: employ('Pedro Gerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: employ('Luiza Drummond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: employ('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };
  console.table(newEmployees());

  const check = (n1, n2) => n1 === n2;
  const sorteio = (aposta, test) => {
    const numSorted = Math.ceil(Math.random()*5);
    console.log(aposta, numSorted);
    return test(aposta, numSorted)? 'Parabéns você ganhou' : 'Tente novamente';
  };
  console.log(sorteio(3, check));

  // Sugestão de respostas a serem validadas.
const checkAnswer = (answerRight) => (answerUser) => answerRight.toUpperCase() === answerUser.toUpperCase();
const correctAnswer = checkAnswer('a'); // 'higher order function';
const userAnswer = correctAnswer('b') // 'HIGHER ORDER FUNCTION';
console.log(correctAnswer('b'), correctAnswer('A'));
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const avalueTest = (gab, test, tester) => {
  let result = 0;
  for (let index = 0; index < gab.length; index += 1) {
    if (tester(gab[index])(test[index])) {
      result += 1;
    } else {
      result += 0.5;
    }
  }
  return result;
};
console.log(avalueTest(rightAnswers, studentAnswers, checkAnswer))

