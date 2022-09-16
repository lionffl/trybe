const Joi = require('joi');
const employeeModel = require('../Models/employeeModel');

const employeeSchema = Joi.object({
  firstName: Joi.string().min(2).max(45).required(),
  lastName: Joi.string().min(2).max(45).required(),
  office: Joi.number().required(),
});

const create = async ({ firstName, lastName, office }) => {
  const { error } = employeeSchema.validate({ firstName, lastName, office });
  if (error) {
    throw { status: 400, message: error.message };
  }

  const id = await employeeModel.create({ firstName, lastName, office });
  return { id, firstName, lastName, office };
};

module.exports = {
  create,
};