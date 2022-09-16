const employeeService = require('../Services/employeeService');

const create = async (req, res, next) => {
  try {
    const { firstName, lastName, office } = req.body;
    const newEmployee = await employeeService.create({ firstName, lastName, office });
    res.status(201).json(newEmployee);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
}