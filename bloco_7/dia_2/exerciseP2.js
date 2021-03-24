const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const inserEnter = (object, key, value) => {
  const objManipuled = object;
  objManipuled[key] = value;
}

inserEnter(lesson2, 'turno', 'manhã');
console.table(lesson2);

const listKeys = (object) => console.log(Object.keys(object));
listKeys(lesson1);

const objectLength = (object) => console.log(Object.keys(object).length);
objectLength(lesson1);

const objectValues = (object) => console.log(Object.values(object));
objectValues(lesson1);

const allLessons = {};
(function(allLessons) {
  allLessons['lesson1'] = Object.assign({}, lesson1);
  allLessons['lesson2'] =  Object.assign({}, lesson2);
  allLessons['lesson3'] = lesson3;
})(allLessons);
console.table(allLessons);

const studentsNumber = (lessons) => {
  let studentsNumber = 0;
  for (lesson in lessons) {
    studentsNumber += lessons[lesson].numeroEstudantes;
  }
  return studentsNumber;
}
console.log(`O total de estudantes é ${studentsNumber(allLessons)}`);

const getValueByNumber = (object, position) => Object.values(object)[position];
console.log(`o valor da posição 2 do objeto lesson1 é ${getValueByNumber(lesson1, 2)}`);

const verifyPair = (object, key, value) => {
  let test = false;
  if (Object.keys(object).includes(key) && object[key] === value){
    test = true;
  }
  return test
}
console.log(`A valor para chave materia é Matemática no objeto lesson1? ${verifyPair(lesson1,'materia','Matemática')}`);
console.log(`A valor para chave materia é Matemática no objeto lesson2? ${verifyPair(lesson2,'materia','Matemática')}`);