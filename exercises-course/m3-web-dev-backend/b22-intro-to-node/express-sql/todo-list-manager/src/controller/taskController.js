const {
  insert,
  update,
  remove,
  findAllTasks,
  findTaskById,
} = require('../../src/db/taskDB');

const createTask = async (req, res) => {
  try {
    const task = req.body;
    const [ result ] = await insert(task);
    res.status(201).req(`Tarefa cadastrada com sucesso. ID ${result.insertId}`)
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Erro ao cadastrar uma task' })
  }  
};

const updateTask = async (req, res) => {
  const task = req.body;
  const { id } = req.params;
  try {
    const [ result ] = await update(task, id);
    if (result.affectedRows > 0) {
      res.status(201).json({ message: `Task com id ${id} atualizada com sucesso` })
    } else {
      res.status(404).json({ message: 'Task nao encontrada.'})
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.sqlMessage })
  }

  res.status(400).json({ message: 'O endpoint PUT /tasks/:id ainda não foi implementado' });
};

const deleteTask = async (req, res) => {
  res.status(400).json({ message: 'O endpoint DELETE /tasks/:id ainda não foi implementado' });
};

const getTasks = async (req, res) => {
  res.status(400).json({ message: 'O endpoint GET /tasks ainda não foi implementado' });
};

const getTaskById = async (req, res) => {
  res.status(400).json({ message: 'O endpoint GET /tasks/:id ainda não foi implementado' });
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
  getTaskById,
};