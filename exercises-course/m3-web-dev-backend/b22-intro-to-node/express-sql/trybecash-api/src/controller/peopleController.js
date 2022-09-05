const {
  insert,
  findAll,
  findById,
  update,
  remove,
} = require('../db/peopleDB');

const createPerson = async (req, res) => {
  const person = req.body;
  
  try {
    const [ result ] = await insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` 
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa'});
  }
};

const getPeople = async (req, res) => {
  try {
    const [result] = await findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
};

const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
};

const updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await update(person, id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
};

const deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
};

module.exports = {
  createPerson,
  getPeople,
  getPersonById,
  updatePerson,
  deletePerson,
}