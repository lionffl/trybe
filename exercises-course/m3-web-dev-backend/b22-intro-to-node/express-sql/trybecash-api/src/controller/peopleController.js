const {
  insert,
} = require('../db/peopleDB');

const createPerson = async (req, res) => {
  const person = req.body;
  
  try {
    const [ result ] = await insert(person);
    console.log(result);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` 
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa'});
  }
};

const getPeople = async (req, res) => {
  res.status(200).send('people');
};

module.exports = {
  createPerson,
  getPeople,
}