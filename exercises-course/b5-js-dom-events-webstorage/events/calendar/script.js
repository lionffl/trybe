function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ulDays = document.getElementById('days');

// 1)

for (let i = 0; i < dezDaysList.length; i++) {
  const liDay = document.createElement('li');
  ulDays.appendChild(liDay);

  if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
    liDay.className = 'day holiday';
    liDay.innerText = dezDaysList[i];
  }
  else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
    liDay.className = 'day friday';
    liDay.innerText = dezDaysList[i];
  }
  else if (dezDaysList[i] === 25) {
    liDay.className = 'day friday holiday';
    liDay.innerText = dezDaysList[i];
  } else {
    liDay.className = 'day';
    liDay.innerText = dezDaysList[i];
  }
}

// 2)

let btnContainer = document.getElementsByClassName('buttons-container')[0];

function createBtn(string, id) {
  let btn = document.createElement('button');
  btnContainer.appendChild(btn);
  btn.id = id;
  btn.innerText = string;
}
createBtn("Feriados", 'btn-holiday');
const btnHoliday = document.getElementById('btn-holiday')

// 3)

let defaultColor = 'rgb(238,238,238)'
let holidayHighlight = false;
let holidays = document.getElementsByClassName('holiday');
btnHoliday.addEventListener('click', function () {

  if (!holidayHighlight) {
    for (let i = 0; i < holidays.length; i++) {
      holidays[i].style.backgroundColor = 'white';
    } holidayHighlight = true;
  }
  else {
    for (let i = 0; i < holidays.length; i++) {
      holidays[i].style.backgroundColor = defaultColor;
    } holidayHighlight = false;
  }
})

// 4)

btnContainer = document.getElementsByClassName('buttons-container')[0];
createBtn("Sexta-feira", 'btn-friday');
const btnFriday = document.getElementById('btn-friday');

// 5)

let defaultDays = [];
let sextouStatus = false;
let sextas = document.getElementsByClassName('friday');
btnFriday.addEventListener('click', function () {

  if (!sextouStatus) {
    for (let i = 0; i < sextas.length; i++) {
      defaultDays.push(sextas[i].innerText);
      sextas[i].innerText = 'SEXTOU!';
    } sextouStatus = true;
  }
  else {
    for (let i = 0; i < sextas.length; i++) {
      sextas[i].innerText = defaultDays[i];
    } sextouStatus = false;
  }
})

// 6)

const arrayOfDays = document.getElementsByClassName('day');

for (let i = 0; i < arrayOfDays.length; i++) {
  arrayOfDays[i].addEventListener('mouseover', function () {
    arrayOfDays[i].style.fontSize = '50px';
  })
}

for (let i = 0; i < arrayOfDays.length; i++) {
  arrayOfDays[i].addEventListener('mouseout', function () {
    arrayOfDays[i].style.fontSize = '20px';
  })
}

// 7) & 8)

const taskContainer = document.querySelector('.my-tasks');
const task = document.createElement('span');
const subtitle = document.createElement('div');
function openTask(string, color) {
  taskContainer.appendChild(task);
  taskContainer.appendChild(subtitle);
  task.innerText = string;
  subtitle.className = 'task';
  subtitle.style.backgroundColor = color;
}

openTask('Estudar', 'red');

// 9
let selectControl = false;
subtitle.addEventListener('click', function () {

  if (!selectControl) {
    subtitle.className = 'task selected';
    selectControl = true;
    console.log(`${subtitle.innerText} selected`)
  } else {
    subtitle.className = 'task'
    selectControl = false;
    console.log(`${subtitle.innerText} unselected`)
  }
})

// 10

const taskCheck = document.getElementsByClassName('task');
let selectionStatus;

if (taskCheck.length > 0) {
  console.log('Nenhuma tarefa selecionada.')
} else {
  console.log('Tem pelo menos uma tarefa selecionada.')
}


