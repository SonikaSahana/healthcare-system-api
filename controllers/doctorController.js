const Doctor= require('../model/doctorModel');

exports.create = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const allDoctors = await Doctor.findAll();
  res.json(allDoctors);
};

exports.getOne = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Not found' });
  res.json(doctor);
};

exports.update = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Not found' });
  await doctor.update(req.body);
  res.json(doctor);
};

exports.delete = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Not found' });
  await doctor.destroy();
  res.json({ message: 'Deleted successfully' });
};
