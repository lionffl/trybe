const conn = require('../db/connection');

const insert = (task) => {
  return conn.execute(
    `INSERT INTO tasks (nome, descricao) VALUES (?, ?)`, 
    [task.nome, task.descricao]
  )
};

const update = (task, id) => {
  return conn.execute(
    `UPDATE tasks
    SET nome = ?, descricao = ?
    WHERE id = ?
    `,
    [task.nome, task.descricao, id]
  )
};

const remove = (id) => {
  return conn.execute(
    `
    DELETE FROM tasks
    WHERE id = ?
    `,
    [id]
  )
};

const findAllTasks = () => {
  return conn.execute(
    `
    SELECT * FROM tasks
    `
  )
};

const findTaskById = (id) => {
  return conn.execute(
    `
    SELECT * FROM tasks WHERE id = ?
    `,
    [id]
  )
};

module.exports = {
  insert,
  update,
  remove,
  findAllTasks,
  findTaskById,
};