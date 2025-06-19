const Doctor = require('../model/doctorModel');

exports.create = async (req, res) => {
  try {
    const { name, specialization } = req.body;

    if (!name || !specialization) {
      return res.status(400).json({ error: 'Name and specialization are required' });
    }

    const doctor = await Doctor.create({ name, specialization });
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getAll = async (req, res) => {
  try {
    const allDoctors = await Doctor.findAll();
    res.json(allDoctors);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.getOne = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Not found' });
    res.json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.update = async (req, res) => {
  try {
    const { name, specialization } = req.body;

    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Not found' });

    if (!name || !specialization) {
      return res.status(400).json({ error: 'Name and specialization are required' });
    }

    await doctor.update({ name, specialization });
    res.json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


exports.delete = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ message: 'Not found' });

    await doctor.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
