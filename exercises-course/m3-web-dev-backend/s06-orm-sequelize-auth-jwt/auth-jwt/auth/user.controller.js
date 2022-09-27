const UserService = require('../services/user.service');
const { getToken } = require('../auth/getToken');
const getUserId = require('../helpers/getUserId');

const create = async (req, res) => {
  const { displayName, email, password } = req.body;
  const user = await UserService.create(displayName, email, password);
  const { id } = user.dataValues;
  const token = getToken(email, id);
  res.status(201).json({ token });
};

const getAll = async (_req, res) => {
  const users = await UserService.getAll();
  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.getUserById(id);
  res.status(200).json(user);
};

const destroy = async (req, res) => {
  const token = req.header('Authorization');
  const userId = await getUserId(token);
  UserService.destroy(userId);
  res.status(204).end();
};

module.exports = {
  create,
  getAll,
  getUserById,
  destroy,
};