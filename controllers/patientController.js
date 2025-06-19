const Patient = require('../model/patientModel');

exports.create = async (req, res) => {
  try {
    const patient = await Patient.create({ ...req.body, userId: req.user.id });
    return res.status(201).json(patient);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const patients = await Patient.findAll({ where: { userId: req.user.id } });
    return res.status(200).json(patients);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Not found' });
    if (patient.userId !== req.user.id) return res.status(403).json({ message: 'Access denied' });

    res.json(patient);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Not found' });
    if (patient.userId !== req.user.id) return res.status(403).json({ message: 'Access denied' });

    await patient.update(req.body);
    res.json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ message: 'Not found' });
    if (patient.userId !== req.user.id) return res.status(403).json({ message: 'Access denied' });

    await patient.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
