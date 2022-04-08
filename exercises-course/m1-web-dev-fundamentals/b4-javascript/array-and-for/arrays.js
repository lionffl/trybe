// Consider the code below and:

let menu = ['Home', 'Servicos', 'Portfolio', 'Links'];
let menuServices;
let indexOfPortfolio;

// 1) Obtain the value "Servicos"

menuServices = menu[1];
console.log(menuServices)

// 2) Search the index of the "Portfolio" value

indexOfPortfolio = menu.indexOf("Servicos")
console.log(indexOfPortfolio);

// 3) Add the value "Contato" at the last position of menu array

menu.push("Contato")
console.log(menu);
