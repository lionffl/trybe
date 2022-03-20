const options = document.getElementsByTagName('select');
const mainMenu = document.getElementsByClassName('main-menu');
const all = document.querySelector('.all');
const content = document.getElementsByClassName('content');
let backgroundColor;
let fontColor;
let fontSize;
let fontStyle;
let lineSpace;
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
}

window.onload = function () {
    pageInit();
}  