const createTask = async (req, res) => {
  res.status(400).json({ message: 'O endpoint POST /tasks ainda não foi implementado' });
};

const updateTask = async (req, res) => {
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
}