const express = require('express');
const { 
  createPerson,
  getPeople,
 } = require('../controller/peopleController');

const router = express.Router();

router.get('/', getPeople);
router.post('/', createPerson);

module.exports = router;