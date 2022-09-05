const express = require('express');

const router = express.Router();

const { 
  createTask,
  updateTask,
  deleteTask,
  getTasks,
  getTaskById,
} = require('../controller/taskController');

router.post('/', createTask);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask);

router.get('/', getTasks);

router.get('/:id', getTaskById);

module.exports = router;
