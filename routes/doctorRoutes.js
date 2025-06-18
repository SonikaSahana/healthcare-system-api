const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const doctorController = require('../controllers/doctorController');

router.post('/', auth, doctorController.create);
router.get('/', auth, doctorController.getAll);
router.get('/:id', auth, doctorController.getOne);
router.put('/:id', auth, doctorController.update);
router.delete('/:id', auth, doctorController.delete);

module.exports = router;
