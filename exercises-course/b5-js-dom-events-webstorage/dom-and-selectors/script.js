const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

// 1)

document.getElementById('page-title').innerText = "Arcane.";
document.getElementById('second-paragraph').innerText = "Best video game series of all time.";
document.getElementById('subtitle').innerText = "A League of Legends story";

// 2)

const cor = document.getElementsByClassName('content')[0].style.textDecoration = 'underline';

// 3)

document.getElementsByTagName('h4')[0].style.color = 'red';