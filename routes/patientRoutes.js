const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const patientController = require('../controllers/patientController');

router.post('/', auth, patientController.create);
router.get('/', auth, patientController.getAll);
router.get('/:id', auth, patientController.getOne);
router.put('/:id', auth, patientController.update);
router.delete('/:id', auth, patientController.delete);

module.exports = router;
