const {
  insert,
  update,
  remove,
  findAllTasks,
  findTaskById,
} = require('../models/tasks');

const createTask = async (req, res) => {
  try {
    const task = req.body;
    const [ result ] = await insert(task);
    res.status(201).json({ success: true, message: `Task cadastrada com sucesso com o ID ${result.insertId}`})
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Erro ao cadastrar uma task' })
  }
};

const updateTask = async (req, res) => {
  const task = req.body;
  const { id } = req.params;
  try {
    const [ result ] = await update(task, id);
    if (result.affectedRows > 0) {
      res.status(201).json({ success: true, message: `Task com id ${id} atualizada com sucesso` })
    } else {
      res.status(404).json({ success: false, message: 'Task nao encontrada.'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage })
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [ result ] = await remove(id);
    if (result.affectedRows > 0) {
      res.status(201).json({ success: true, message: `Task com o id ${id} foi removida com sucesso` });
    } else {
      res.status(404).json({ success: false, message: 'Task nao encontrada.'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage })
  }
};

const getTasks = async (req, res) => {
  try {
    const [ result ] = await findAllTasks();
    res.status(200).json({ success: true, data: [...result] });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage })
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const [ result ] = await findTaskById(id);
    if (result) {
      res.status(200).json({ success: true, data: [...result] });
    } else {
      res.status(404).json({ success: false, message: 'Task nao encontrada.'})
    } 
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage })
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
  getTaskById,
};
