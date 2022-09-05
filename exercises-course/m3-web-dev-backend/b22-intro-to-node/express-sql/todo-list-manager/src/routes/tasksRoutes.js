const express = require('express');

const router = express.Router();

const { 
  createTask,
  updateTask,
  deleteTask,
  getTasks,
  getTaskById,
} = require('../controller/taskController');

// router.post('/', createTask);
// router.put('/:id', updateTask);
// router.delete('/:id', deleteTask);
// router.get('/', getTasks);
// router.get('/:id', getTaskById);

router.route('/').get(getTasks).post(createTask);
router.route('/:id').put(updateTask).delete(deleteTask).get(getTaskById);

module.exports = router;
