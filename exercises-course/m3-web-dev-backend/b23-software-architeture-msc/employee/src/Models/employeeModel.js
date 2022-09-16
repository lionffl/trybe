const { connection } = require('./connection');

const create = async ({ firstName, lastName, office }) => {
  const query = 'INSERT INTO exercises.employees (first_name, last_name, office) VALUES(?, ?, ?)';
  const [result] = await connection.execute(query, [firstName, lastName, office]);
  return result.insertId;
};

module.exports = {
  create,
};