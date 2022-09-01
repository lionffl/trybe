const simpsons = require('./simpsons.json');
const fs = require('fs').promises;

// Exercise 1

// const printSimpsons = () => simpsons.map((simpson) => console.log(`${simpson.id} - ${simpson.name}`));

// printSimpsons();


// Exercise 2

// const printSimpson = (id) => {
//   const simpson = simpsons.find(( simpson ) => simpson.id === id )
  
//   const promise = new Promise((resolve, reject) => {
//     if (simpson) resolve(`${simpson.id} - ${simpson.name}`)

//     reject('id not found')

//   })

//   return promise;

// };

// printSimpson('11')
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
// ;

// Exercise 3

// const removeSimpsons = () => {
//   const newSimpsons = simpsons.filter((simpson) => simpson.id != 10 && simpson.id != 6)
//   return newSimpsons;
// }

// console.log(removeSimpsons());

// Excerise 4

// const main = async () => {
  
//   const newSimpsons = JSON.stringify(simpsons.filter((simpson) => simpson.id == 1 || simpson.id == 4));
  
//   try {
//     const data = await fs.writeFile('./simpsonsFamily.json', newSimpsons);
//     console.log(data);
//   } catch (error) {
//     console.error(`Error: ${error.message}`)
//   }
// }

// main();

// Exercise 5

// const main = async () => {
//   const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8');
//   const simpsonsFamilyObj = JSON.parse(simpsonsFamily);

//   const newFamilyMember = { id: '11', name: 'Nelson Muntz'};
//   const newSimpsonsFamily = JSON.stringify([...simpsonsFamilyObj, newFamilyMember]);

//   try {
//     await fs.writeFile('./simpsonsFamily.json', newSimpsonsFamily);
//   } catch (error) {
//     console.error(`Error: ${error.message}`)
//   }
// }

// main();

// Exercise 6

const main = async () => {
  const simpsonsFamily = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsonsFamilyJSON = JSON.parse(simpsonsFamily);

  const simpsonsFamilyFiltered = simpsonsFamilyJSON.filter((simpson) => simpson.id != 11);
  const newFamilyMember = { id: '5', name: 'Maggie Simpson'};

  const newSimpsonsFamily = JSON.stringify([...simpsonsFamilyFiltered, newFamilyMember]);

  try {
    await fs.writeFile('./simpsonsFamily.json', newSimpsonsFamily);
  } catch (error) {
    console.error(`Error: ${error.message}`)
  }
}

main();
