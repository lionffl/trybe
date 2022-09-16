const express = require('express');
const { 
  createPerson,
  getPeople,
  getPersonById,
  updatePerson,
  deletePerson,
 } = require('../controller/peopleController');

const router = express.Router();

// router.get('/', getPeople);
// router.post('/', createPerson);
// router.get('/:id', getPersonById);
// router.put('/:id', updatePerson);
// router.put('/:id', deletePerson);

router.route('/').get(getPeople).post(createPerson);
router.route('/:id').get(getPersonById).put(updatePerson).delete(deletePerson);

module.exports = router;