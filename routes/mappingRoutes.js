const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const mappingController = require('../controllers/mappingController');

router.post('/', auth, mappingController.create);
router.get('/', auth, mappingController.getAll);
router.get('/:patientId', auth, mappingController.getByPatientId);
router.delete('/:id', auth, mappingController.delete);

module.exports = router;
