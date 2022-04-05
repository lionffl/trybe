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

const addShift = (obj, key, value) => {
  return obj[key] = value;
};

addShift(lesson2, 'turno', 'noite');

console.log(lesson2.turno);

const getKeys = (obj) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(key);
  }
}

getKeys(lesson1);

const getObjSize = obj => console.log(Object.keys(obj).length);

getObjSize(lesson1);

const getObjValue = obj => {
  let result;
  const first = Object.values(obj)[0];
  const values = Object.values(obj);
  for (const value of values) {
    if (value === first) {
      result = `${value}`;
    } else { result = `${result}, ${value}`; }
  }
  return console.log(`${result}`);
}
getObjValue(lesson1);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// allLessons.lesson1 = lesson1;
// allLessons.lesson2 = lesson2;
// allLessons.lesson3 = lesson3;

console.log(allLessons);

const getStudents = obj => {
  const values = Object.values(obj);
  let students = 0;

  // for (let i = 0; i < values.length; i += 1) {
  //   students = students + values[i].numeroEstudantes;
  // }

  // for (const student in values) {
  //   students = students + values[student].numeroEstudantes;
  // }

  for (const key of values) {
    students = students + key.numeroEstudantes;
  }
  return console.log(students)
}

getStudents(allLessons)

const getValueByNumber = (obj,position) => {
  const values = Object.values(obj);
  console.log(values[position]);
}

getValueByNumber(lesson1,0);

const verifyPair = (obj, key, value) => {
  const pairs = Object.entries(obj);
  let isTrue = false;
  console.log(pairs)

  for (let i = 0; i < pairs.length; i +=1 ) {
   if (pairs[i][0] === key && pairs[i][1] === value) {
     isTrue = true;
   }
  }
  return console.log(isTrue);
}


verifyPair(lesson3, 'turno', 'noite');
verifyPair(lesson2, 'materia', 'Maria Clara');
