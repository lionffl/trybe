const options = document.getElementsByTagName('select');
const mainMenu = document.getElementsByClassName('main-menu');
const all = document.querySelector('.all');
const content = document.getElementsByClassName('content');
let backgroundColor;
let fontColor;
let fontSize;
let fontStyle;
let lineSpace;

// user settings

const saveBtn = document.querySelector('.save-btn');

saveBtn.addEventListener('click', function () {

    backgroundColor = options[0].value;
    fontColor = options[1].value;
    fontSize = options[2].value;
    fontStyle = options[3].value;
    lineSpace = options[4].value;

    all.style.backgroundColor = backgroundColor;
    all.style.color = fontColor;
    all.style.fontSize = fontSize;
    all.style.fontFamily = fontStyle;

    for (let i = 0; i < content.length; i++) {
        content[i].style.lineHeight = lineSpace;
    }

    localStorage.setItem('backgroundColor', JSON.stringify(backgroundColor));
    localStorage.setItem('fontColor', JSON.stringify(fontColor));
    localStorage.setItem('fontSize', JSON.stringify(fontSize));
    localStorage.setItem('fontStyle', JSON.stringify(fontStyle));
    localStorage.setItem('lineSpace', JSON.stringify(lineSpace));
})

function pageInit() {

    backgroundColor = JSON.parse(localStorage.backgroundColor);
    fontColor = JSON.parse(localStorage.fontColor);
    fontSize = JSON.parse(localStorage.fontSize);
    fontStyle = JSON.parse(localStorage.fontStyle);
    lineSpace = JSON.parse(localStorage.lineSpace);

    all.style.backgroundColor = backgroundColor;
    all.style.color = fontColor;
    all.style.fontSize = fontSize;
    all.style.fontFamily = fontStyle;

    for (let i = 0; i < content.length; i++) {
        content[i].style.lineHeight = lineSpace;
    }
    console.log(backgroundColor)
}

window.onload = function () {
    pageInit();
}    