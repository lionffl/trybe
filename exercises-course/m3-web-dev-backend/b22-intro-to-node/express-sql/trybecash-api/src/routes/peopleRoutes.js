const express = require('express');
const { 
  createPerson,
  getPeople,
  getPersonById,
 } = require('../controller/peopleController');

const router = express.Router();

// router.get('/', getPeople);
// router.post('/', createPerson);
// router.get('/:id', getPersonById);

router.route('/').get(getPeople).post(createPerson);
router.route('/:id').get(getPersonById);


module.exports = router;