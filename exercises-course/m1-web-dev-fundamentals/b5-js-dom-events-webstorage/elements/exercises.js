// 1)

const body = document.getElementsByTagName('body')[0];

let title = document.createElement('h1');

title.innerText = "Exercicio 5.2 - JS DOM";

body.appendChild(title);

// 2)

const main = document.createElement('main');

main.className = 'main-content';

body.appendChild(main);

// 3)

const section = document.createElement('section');

section.className = 'center-content';

main.appendChild(section);

// 4)

const paragraph = document.createElement('p');

paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem aut consectetur facere nesciunt? Dolor blanditiis minus cumque reprehenderit, fuga aliquid nulla expedita aliquam iusto esse, nisi reiciendis cupiditate a'

section.appendChild(paragraph);

// 5)

const leftSection = document.createElement('section');

leftSection.className = 'left-content';

main.appendChild(leftSection);

// 6)

const rightSection = document.createElement('section');

rightSection.className = 'right-content';

main.appendChild(rightSection);

// 7)

let image = document.createElement('img');

image.setAttribute('src','https://picsum.photos/200');

image.className = 'small-image';

leftSection.appendChild(image);

// 8)

let liNames = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let i = 0 ; i < 10; i++) {
   let list = document.createElement('li');
   list.innerText = liNames[i];
   rightSection.appendChild(list);
}

// 9)

for (let i = 0 ; i < 3; i++) {
    let subtitle = document.createElement('h3');
    main.appendChild(subtitle);
 }

// 10)

title.className = 'title';

// 11)

for (let i = 0; i < 3; i++) {
    document.getElementsByTagName('h3')[i].className = 'description';
}

// 12)

main.removeChild(leftSection);

// 13)

rightSection.style.marginRight = 'auto';

// 14)

section.style.backgroundColor = 'green';

// 15)

let liItem = document.getElementsByTagName('li');

for (let i = 0; i < 2; i++) {
    let liItemLastChild = liItem[liItem.length-1];
    rightSection.removeChild(liItemLastChild);
}







